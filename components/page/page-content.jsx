import React from 'react'
import { useTheme } from '../themes'

const PageContent = ({ className = '', children, ...props }) => {
  const theme = useTheme()

  return (
    <main className={className} {...props}>
      {children}
      <style jsx>{`
        main {
          width: 100%;
          padding: calc(${theme.layout.gap} * 2.5) 0;
        }
      `}</style>
    </main>
  )
}

export default PageContent
