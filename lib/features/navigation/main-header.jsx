import React from 'react'
import Header from '../../components/header'

const MainHeader = () => {
  return (
    <Header>
      <Header.Item>
        <Header.Link href="/">Moa</Header.Link>
      </Header.Item>
      <Header.Item style={{ justifyContent: 'flex-end' }}>
        <Header.Link href="/posts">Blog</Header.Link>
        <Header.Link href="#">About</Header.Link>
        <Header.Link href="#">Home</Header.Link>
      </Header.Item>
    </Header>
  )
}

export default MainHeader
