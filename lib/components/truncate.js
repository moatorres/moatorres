import React from 'react'

const Truncate = ({ inline, maxWidth, expandable, className, children }) => {
  return (
    <div className={`truncate ${className}`}>
      {children}
      <style jsx>{`
        .truncate {
          display: ${inline ? 'inline-block' : 'inherit'};
          overflow: hidden;
          text-overflow: ellipsis;
          vertical-align: ${inline ? 'top' : 'initial'};
          white-space: nowrap;
          max-width: ${maxWidth}px;
        }
        .truncate:hover {
          max-width: ${expandable ? '1000px' : ''};
        }
      `}</style>
    </div>
  )
}

Truncate.defaultProps = {
  expandable: false,
  inline: false,
  maxWidth: 125,
}

export default Truncate
