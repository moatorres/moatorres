import React from 'react'
import { useTheme } from '../themes'

const HeaderLink = ({ children, ...props }) => {
  const theme = useTheme()

  return (
    <a className="header-link" {...props}>
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
          transition: all linear 75ms;
        }
        .header-link:hover,
        .header-link:focus {
          color: ${theme.colors.blue[4]};
        }
        .header-link:last-child {
          margin-right: 0;
        }
      `}</style>
    </a>
  )
}

export default HeaderLink
