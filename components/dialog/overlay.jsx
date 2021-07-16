import React from 'react'

const Overlay = React.forwardRef(({ children }, forwardedRef) => {
  return (
    <span className="overlay" ref={forwardedRef}>
      {children}
      <style jsx>{`
        .overlay:before {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: block;
          cursor: default;
          content: ' ';
          background: transparent;
          z-index: 99;
          background: rgba(1, 1, 1, 0.75);
        }
      `}</style>
    </span>
  )
})

export default Overlay
