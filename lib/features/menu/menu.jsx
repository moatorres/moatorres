import React, { Fragment, useRef, useState } from 'react'
import Dialog from '@components/dialog/dialog'
import { useTheme } from '@components/themes'
import CommandIcon from '@components/icons/command'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const initialFocus = useRef(null)
  const theme = useTheme()

  const menu = [
    { title: '💁🏻‍♂️ About', path: '/about' },
    { title: '📝 Blog', path: '/blog' },
    { title: '🏠 Home', path: '/' },
  ]
  const [items, setItems] = useState(menu)
  const handleClose = () => {
    setIsOpen(false)
    setItems(menu)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setItems(menu.filter((item) => item.path.includes(e.target.value)))
  }

  return (
    <Fragment>
      <div onClick={() => setIsOpen(true)}>
        <CommandIcon style={{ margin: 'auto' }} />
      </div>
      <Dialog
        isOpen={isOpen}
        initialFocusRef={initialFocus}
        onDismiss={handleClose}>
        <Dialog.Header>
          <input
            ref={initialFocus}
            onChange={handleSearch}
            placeholder="Type a command or search..."
            className="search"
            type="text"
          />
        </Dialog.Header>

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
      </Dialog>
      <style jsx>{`
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
        margin: auto ${theme.layout.gap} auto ${theme.layout.gap};
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
      }
      .menu-item-link:last-child {
        border-radius: 0 0 ${theme.layout.radius} ${theme.layout.radius};
      }
      .menu-item-link:hover{
        color: ${theme.colors.foreground};
      }
      `}</style>
    </Fragment>
  )
}

export default Menu
