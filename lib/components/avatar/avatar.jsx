import React, { Fragment, useMemo } from 'react'
import { useTheme } from '../themes'

const getSize = (size) => {
  const sizes = {
    mini: '1.25rem',
    small: '1.875rem',
    medium: '3.75rem',
    large: '5.625rem',
  }
  if (typeof size === 'number') return `${size}px`
  return sizes[size]
}

const Avatar = ({
  src,
  alt = '',
  size = 'small',
  square = false,
  className,
  ...props
}) => {
  const theme = useTheme()
  const width = useMemo(() => getSize(size), [size])
  const radius = square ? theme.layout.radius : '50%'

  return (
    <Fragment>
      <img src={src} alt={alt} className={`avatar ${className}`} {...props} />
      <style jsx>{`
        .avatar {
          height: 100%;
          width: ${width};
          display: inline-block;
          overflow: hidden;
          line-height: ${theme.lineHeight.condensed};
          vertical-align: middle;
          border-radius: ${radius};
          background-color: ${theme.colors.background};
          box-shadow: ;
        }
      `}</style>
    </Fragment>
  )
}

export default Avatar
