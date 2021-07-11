import React from 'react'
import { useRouter } from 'next/router'
import Header from '@components/header'
import Avatar from '@components/avatar'

const menu = [
  { title: 'Blog', path: '/blog' },
  { title: 'About', path: '/about' },
  { title: 'Home', path: '/' },
]

const MainHeader = () => {
  const router = useRouter()

  return (
    <Header>
      <Header.Item>
        <Header.Link href="/">
          <Avatar src="https://avatars.githubusercontent.com/u/44585769?v=4" />
        </Header.Link>
      </Header.Item>
      <Header.Item style={{ justifyContent: 'flex-end' }}>
        {menu.map((item, index) => (
          <Header.Link
            id={index}
            href={item.path}
            active={router.pathname === item.path}>
            {item.title}
          </Header.Link>
        ))}
      </Header.Item>
    </Header>
  )
}

export default MainHeader
