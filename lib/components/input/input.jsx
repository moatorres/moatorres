import React, { Fragment } from 'react'
import { useTheme } from '../themes'

const Input = ({ type = 'text', ...props }) => {
  const theme = useTheme()

  return (
    <Fragment>
      <input type={type} className={`input ${props.className}`} {...props} />
      <style jsx>{`
        .input {
          height: 2.5rem;
          font-size: 1rem;
          border-radius: ${theme.layout.radius};
          background: ${theme.colors.background};
          color: ${theme.colors.foreground};
          border: 1px solid ${theme.colors.gray[2]};
          padding: 0 ${theme.layout.gapHalf};
          outline: none;
          transition: border-color ease-in-out 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
        }

        .input:focus {
          border-color: ${theme.colors.link};
        }
      `}</style>
    </Fragment>
  )
}

export default Input
