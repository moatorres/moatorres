import React from 'react'
import { useTheme } from '../themes'

const Tag = ({ title }) => {
  const theme = useTheme()
  const isDark = theme.type !== 'light'
  return (
    <div className="tag">
      {title || 'NEW'}
      <style jsx>{`
        .tag {
          display: inline;
          border-radius: ${theme.layout.radius};
          background: ${isDark ? 'rgba(115, 102, 255, 0.1)' : '#a299ff'};
          padding: 0.125rem 0.425rem;
          /* padding: ${theme.layout.gapSmall} ${theme.layout.gapQuarter}; */
          white-space: nowrap;
          font-weight: ${theme.fontWeight.semibold};
          color: #f2f4f7;
          /* color: ${theme.colors.background}; */
        }
      `}</style>
    </div>
  )
}

export default Tag
