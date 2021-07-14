import React from 'react'
import { useRouter } from 'next/router'
import Header from '@components/header'
import { useShortcuts } from '@components/shortcuts'
import ScrollBar from '@components/scrollbar'
import Menu from '../menu/menu'

const menu = [
  { title: 'Blog', path: '/blog' },
  { title: 'About', path: '/about' },
  { title: 'Projects', path: '/projects' },
]

const MainHeader = () => {
  const router = useRouter()
  useShortcuts()

  return (
    <Header>
      <ScrollBar />
      <Menu />
      <Header.Item style={{ justifyContent: 'flex-end' }}>
        {menu.map((item, index) => (
          <Header.Link
            key={index}
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
