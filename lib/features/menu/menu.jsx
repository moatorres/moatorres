import React, { Fragment, useRef, useState } from 'react'
import Dialog from '@components/dialog/dialog'
import { useTheme } from '@components/themes'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()
  const initialFocusRef = useRef(null)

  const menu = [
    { title: 'About', path: '/about' },
    { title: 'Blog', path: '/blog' },
    { title: 'Home', path: '/' },
    { title: 'Projects', path: '/projects' },
    { title: 'Snippets', path: '/snippets' },
  ]

  const [items, setItems] = useState(menu)

  const handleClose = () => {
    setIsOpen(false)
    setItems(menu)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setItems(
      menu.filter((item) => item.title.toLowerCase().includes(e.target.value))
    )
  }

  return (
    <Fragment>
      <a onClick={() => setIsOpen(true)}>
        <h2 style={{ margin: '0', lineHeight: '1' }}>∀</h2>
      </a>
      <Dialog
        isOpen={isOpen}
        initialFocusRef={initialFocusRef}
        onDismiss={handleClose}>
        <Dialog.Header>
          <input
            ref={initialFocusRef}
            onChange={handleSearch}
            placeholder="Type to search..."
            className="search"
            type="text"
          />
        </Dialog.Header>
        <div className="container">
          <div className="container-content">
            {items.map((item, index) => {
              return (
                <div key={index} className="menu-item">
                  <a
                    href={item.path}
                    className="menu-item-link"
                    onClick={handleClose}>
                    {item.title}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </Dialog>
      <style jsx>{`
      .container {
        overflow-y: auto;
        border-radius: ${theme.layout.radius};
      }
      .container-content {
        overflow-x: hidden;
        max-height: calc(40vh - 61px);
      }
      .search {
        padding: 0;
        margin-left: ${theme.layout.gap};
        margin-right: ${theme.layout.gap};
        border-radius: ${theme.layout.radius};
        color: ${theme.colors.foreground};
        background: ${theme.colors.background};
        outline: none;
        height 60px;
        width: 100%;
        border: 0;
        font-size: 1;
      }
      .menu-item {
        display: flex;
        align-items: center;
        height 60px;
        border: 0;
        font-size: 1;
      }
      .menu-item:first-child {
        border-radius: ${theme.layout.radius} ${theme.layout.radius} 0 0;
      }
      .menu-item:last-child {
        border-radius: 0 0 ${theme.layout.radius} ${theme.layout.radius};
      }
      .menu-item-link{
        line-height: 4;
        width: 100%;
        cursor: pointer;
        padding: 0 ${theme.layout.gap} 0 ${theme.layout.gap};
      }
      .menu-item-link:last-child {
        border-radius: 0 0 ${theme.layout.radius} ${theme.layout.radius};
      }
      .menu-item-link:hover{
        color: ${theme.colors.foreground};
      }
      @media screen and (max-width: ${theme.breakpoints.sm.max}) {
          .container,
          .container-content {
            max-height: 80vh;
          }
        }
      `}</style>
    </Fragment>
  )
}

export default Menu
