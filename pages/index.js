import fs from 'fs'
import path from 'path'
import React from 'react'
import getMetadata from 'gray-matter'
import { postFilePaths, POSTS_PATH } from '@utils/mdx-utils'
import { useTheme } from '@components/themes'

import Page from '@components/page'
import Link from '@components/link'
import Card from '@components/card'

import MainHeader from '@features/navigation/main-header'
import Tag from 'components/tag'

const Home = ({ posts }) => {
  const theme = useTheme()
  return (
    <Page size="mini">
      <MainHeader />
      <Page.Content>
        <h1 style={{ color: theme.colors.link }}>Hey, I'm Moa Torres 👋</h1>
        <h4 style={{ textAlign: 'justify' }}>
          I'm a self-taught developer passionate about Node.js and React. I
          strive to build high-end scalable applications with JavaScript and
          TypeScript.
        </h4>
        <p style={{ textAlign: 'justify' }}>
          You've found my personal spot on the internet. This is where I share
          some of the projects I'm working on as well as lessons learnt on the
          go. You can also <Link href="/about">learn more about me here</Link>.
        </p>
        <h2 style={{ fontWeight: '700', paddingTop: '2rem' }}>Most Popular</h2>
        {posts.map((post) => (
          <Card key={post.filePath}>
            <Tag title="New" />
            <h3>
              <Link
                as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/blog/${post.data.slug}`}>
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

export default Home

// 223509030
// jiKfen-mowwis-3zogsy
