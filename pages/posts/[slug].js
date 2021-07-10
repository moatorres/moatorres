import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import getMetadata from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { postFilePaths, POSTS_PATH } from '../../lib/utils/mdx-utils'

const components = { Head }

const PostPage = ({ source, meta }) => {
  return <MDXRemote {...source} components={components} />
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const post = fs.readFileSync(postFilePath)
  const { content, data } = getMetadata(post)

  const source = await serialize(content, { scope: data })

  return {
    props: {
      source: source,
      meta: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export default PostPage
