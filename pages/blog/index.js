import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import getMetadata from 'gray-matter'
import { postFilePaths, POSTS_PATH } from '../../lib/utils/mdx-utils'
import MainHeader from '../../lib/features/navigation/main-header'
import Page from '../../lib/components/page'

const Posts = ({ posts }) => {
  return (
    <Page size="mini">
      <MainHeader />
      <Page.Content>
        {posts.map((post) => (
          <Link
            key={post.filePath}
            as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
            href={`/blog/[slug]`}>
            {post.data.title}
          </Link>
        ))}
      </Page.Content>
    </Page>
  )
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = getMetadata(source)
    return { content, data, filePath }
  })

  return { props: { posts } }
}

export default Posts
