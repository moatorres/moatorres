import React from 'react'
import { useTheme } from '../themes'

const Header = ({ children, ...props }) => {
  const theme = useTheme()
  return (
    <div className="header" {...props}>
      {children}
      <style jsx>{`
        .header {
          top: 0;
          z-index: 10;
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          color: ${theme.colors.foreground};
          line-height: ${theme.lineHeight.default};
          background-filter: saturate(150%) blur(10px);
          padding-top: calc(${theme.layout.gap} * 3.725);
          padding-bottom: ${theme.layout.gap};
        }

        @media screen and (max-width: ${theme.breakpoints.sm.max}) {
          .header {
            padding-top: calc(${theme.layout.gap} * 2);
          }
        }
      `}</style>
    </div>
  )
}

export default Header
