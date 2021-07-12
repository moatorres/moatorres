import React from 'react'

const HeaderItem = ({ children, ...props }) => {
  return (
    <div className="header-item" {...props}>
      {children}
      <style jsx>{`
        .header-item {
          flex: auto;
          display: flex;
          flex-wrap: nowrap;
          align-self: stretch;
          align-items: center;
          margin-right: 0.5rem;
          justify-content: space-between;
          font-size: 1.25rem;
        }
        .header-item:last-child {
          margin-right: 0 !important;
        }
      `}</style>
    </div>
  )
}

export default HeaderItem
