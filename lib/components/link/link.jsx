import React from 'react'
import { useTheme } from '../themes'

const Link = React.forwardRef(
  ({ href, decorated, children, className, block, ...props }, ref) => {
    const theme = useTheme()
    const padding = block ? theme.layout.gapQuarter : '0'
    const decoration = decorated ? 'underline' : 'none'

    return (
      <a className={`link ${className}`} href={href} {...props} ref={ref}>
        {children}
        <style jsx>{`
          .link {
            display: inline-flex;
            align-items: baseline;
            line-height: inherit;
            color: ${theme.colors.link};
            text-decoration: none;
            padding: calc(${padding} * 0.8) calc(${padding} * 1.7);
            border-radius: ${block ? theme.layout.radius : 0};
            width: fit-content;
            transition: color 200ms ease 0ms;
          }
          .link:hover,
          .link:active,
          .link:focus {
            text-decoration: ${decoration};
          }
          .link:hover {
            color: ${theme.expressiveness.linkHoverStyle};
          }
        `}</style>
      </a>
    )
  }
)

Link.defaultProps = {
  href: '#',
  block: false,
  className: '',
}

export default React.memo(Link)
