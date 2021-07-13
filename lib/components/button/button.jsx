import { forwardRef } from 'react'
import { useTheme } from '../themes'

const Button = forwardRef(({ onClick, children, disabled }, ref) => {
  const theme = useTheme()
  return (
    <button onClick={onClick} className="button" disabled={disabled} ref={ref}>
      {children}
      <style jsx>{`
        .button {
          user-select: none;
          cursor: pointer;
          border-radius: ${theme.layout.radius};
          color: ${theme.colors.foreground};
          font-weight: ${theme.fontWeight.semibold};
          background: ${theme.colors.background};
          border: none;
          height: 2rem;
          display: flex;
          align-items: center;
          padding: ${theme.layout.gapQuarter} ${theme.layout.gapHalf};
        }

        .button:hover,
        .button:focus {
          outline: none;
          color: ${theme.colors.link};
        }

        .button[disabled] {
          cursor: not-allowed;
          background: ${theme.colors.gray[2]};
          color: ${theme.colors.gray[4]};
        }
      `}</style>
    </button>
  )
})

export default Button
