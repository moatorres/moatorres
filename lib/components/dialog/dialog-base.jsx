import React from 'react'
import { useTheme } from '../themes'

const DialogBase = ({ children, ...props }) => {
  const theme = useTheme()
  return (
    <div className="dialog-base" {...props}>
      {children}
      <style jsx>{`
        .dialog-base {
          box-shadow: ${theme.expressiveness.shadowLarge};
          border-radius: ${theme.layout.radius};
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 999;
          margin: 10vh auto;
          background-color: ${theme.colors.background};
          width: 440px;
          outline: none;
          transition: all 0.2s ease;
        }
        @media screen and (max-width: ${theme.breakpoints.sm.min}) {
          .dialog-base {
            width: 100vw;
            margin: auto auto 0 auto;
            max-height: 80vh;
            bottom: 0;
            height: calc(100vh - calc(30px + (3 * ${theme.layout.gap})));
          }
        }
      `}</style>
    </div>
  )
}

export default DialogBase
