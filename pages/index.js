import React from 'react'
import Page from '@components/page'
import MainHeader from '@features/navigation/main-header'
import Link from '@components/link'

const Home = () => {
  return (
    <Page size="mini">
      <MainHeader />
      <Page.Content>
        <h1>Hey, I'm Moa Torres 👋 </h1>
        <h4 style={{ textAlign: 'justify' }}>
          I'm a self-taught developer passionate about Node.js and React. I
          strive to build high-end scalable applications with JavaScript and
          TypeScript.
        </h4>
        <p style={{ textAlign: 'justify' }}>
          You've found my personal spot on the internet. This is where I share
          some of the projects I'm working on as well as lessons learnt on the
          go. You can also{' '}
          <Link href="/about" color>
            learn more about me here
          </Link>
          .
        </p>
      </Page.Content>
    </Page>
  )
}

export default Home
