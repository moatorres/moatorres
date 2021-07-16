import React, { useState, useEffect } from 'react'
import { useTheme } from './themes'

const ScrollBar = () => {
  const theme = useTheme()
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scroll = `${totalScroll / windowHeight}`

      setScroll(scroll)
    }

    window.addEventListener('scroll', progressBarHandler)

    return () => window.removeEventListener('scroll', progressBarHandler)
  })

  return (
    <div className="container">
      <div className="bar" />
      <style jsx>{`
        .container {
          position: fixed;
          z-index: 10;
          width: 100%;
          top: 0;
          left: 0;
        }
        .bar {
          background: ${theme.colors.foreground};
          transform-origin: top left;
          transform: scale(${scroll}, 1);
          /* opacity: ${scroll}; */
        }
        .container,
        .bar {
          height: 3px;
        }
      `}</style>
    </div>
  )
}

export default ScrollBar
