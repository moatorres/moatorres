import React from 'react'
import { useTheme } from '../themes'

const DialogHeader = ({ children, ...props }) => {
  const theme = useTheme()
  const isLight = theme.type !== 'dark'
  const stringOnlyChildren = React.Children.toArray(children).every(
    (ch) => typeof ch === 'string'
  )

  if (stringOnlyChildren) children = <p>{children}</p>

  return (
    <div className="dialog-header" {...props}>
      {children}
      <style jsx>{`
        .dialog-header {
          display: flex;
          color: ${theme.colors.foreground};
          background: ${theme.colors.background};
          font-size: 14px;
          font-weight: ${theme.fontWeight.bold};
          border-radius: ${theme.layout.radius} ${theme.layout.radius} 0 0;
          border-bottom: 1px solid
            ${isLight ? theme.colors.gray[2] : theme.colors.gray[8]};
        }
      `}</style>
    </div>
  )
}

DialogHeader.displayName = 'Dialog.Header'

export default DialogHeader
