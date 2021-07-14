import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import getMetadata from 'gray-matter'
import { postFilePaths, POSTS_PATH } from '@utils/mdx-utils'
import MainHeader from '@features/navigation/main-header'
import Page from '@components/page'
import Card from '@components/card'

const Posts = ({ posts }) => {
  return (
    <Page title="Blog" size="mini">
      <MainHeader />
      <Page.Content>
        <h1>Blog</h1>
        {posts.map((post) => (
          <Card key={post.filePath}>
            <h3>
              <Link
                as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/blog/[slug]`}>
                {post.data.title}
              </Link>
            </h3>
            {post.data.description}
          </Card>
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
