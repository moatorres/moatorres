import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import getMetadata from 'gray-matter'
import { postFilePaths, POSTS_PATH } from '../../lib/utils/mdx-utils'

const Posts = ({ posts }) => {
  return posts.map((post) => (
    <Link
      key={post.filePath}
      as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
      href={`/posts/[slug]`}>
      {post.data.title}
    </Link>
  ))
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