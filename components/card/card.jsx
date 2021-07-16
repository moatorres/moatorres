import React, { useMemo } from 'react'
import { useTheme } from '../themes'

const defaultProps = {
  type: 'default',
  hoverable: false,
  shadow: false,
  width: '100%',
  className: '',
}

const Card = ({
  children,
  hoverable,
  className,
  shadow,
  type,
  width,
  ...props
}) => {
  const theme = useTheme()

  const hoverShadow = useMemo(() => {
    if (shadow) return theme.expressiveness.shadowMedium
    return hoverable ? theme.expressiveness.shadowSmall : 'none'
  }, [hoverable, shadow, theme.expressiveness])

  return (
    <div className={`card ${className}`} {...props}>
      {children}
      <style jsx>{`
        .card {
          padding: ${shadow ? theme.layout.gap : '0.625rem 0 0.625rem 0'};
          width: ${width};
          transition: all 0.2s ease;
          border-radius: ${theme.layout.radius};
          box-shadow: ${shadow ? theme.expressiveness.shadowSmall : 'none'};
          box-sizing: border-box;
          color: ${theme.colors.foreground};
          cursor: pointer;
          text-transform: capitalize;
        }
        .card:hover {
          box-shadow: ${hoverShadow};
        }
      `}</style>
    </div>
  )
}

Card.defaultProps = defaultProps

export default React.memo(Card)
