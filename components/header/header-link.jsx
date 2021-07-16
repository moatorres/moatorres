import React from 'react'
import { useTheme } from '../themes'

const HeaderLink = ({ children, active = false, className, ...props }) => {
  const theme = useTheme()

  return (
    <a className={`header-link ${active && 'active'} ${className} `} {...props}>
      {children}
      <style jsx>{`
        .header-link {
          font-weight: ${theme.fontWeight.bold};
          color: ${theme.colors.foreground};
          white-space: nowrap;
          cursor: pointer;
          text-decoration: none;
          display: flex;
          align-items: center;
          margin-right: ${theme.layout.gapHalf};
          transition: all linear 0.2s;
        }
        .header-link:hover,
        .header-link:focus {
          color: ${theme.colors.link};
        }
        .active {
          font-weight: 700;
        }
        .header-link:last-child {
          margin-right: 0;
        }
      `}</style>
    </a>
  )
}

export default HeaderLink
