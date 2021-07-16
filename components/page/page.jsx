import React, { Fragment, useMemo } from 'react'
import { useTheme } from '../themes'
import { hasChild } from '@utils/has-child'
import PageContent from './page-content'
import Head from '../head'

const getPageSize = (size, layout) => {
  const presets = {
    medium: layout.pageWidth,
    small: `calc(${layout.pageWidth} - 100pt)`,
    mini: `calc(${layout.pageWidth} - 180pt)`,
    large: `calc(${layout.pageWidth} + 100pt)`,
  }
  const presetValue = presets[size]
  if (!presetValue) return size
  return presetValue
}

const Page = ({
  children,
  size = 'medium',
  className,
  title,
  description,
  footer = true,
  header = true,
  showHeaderTitle = true,
  image,
  ...props
}) => {
  const theme = useTheme()
  const width = useMemo(
    () => getPageSize(size, theme.layout),
    [size, theme.layout]
  )

  const hasContent = hasChild(children, PageContent)

  return (
    <Fragment>
      <Head title={`${title ? `${title} — ` : ''}Moa Torres`} />
      <section className={className} {...props}>
        {hasContent ? children : <PageContent>{children}</PageContent>}
        <style jsx>{`
          section {
            width: ${width};
            max-width: 100vw;
            min-height: 100vh;
            margin: 0 auto;
            padding: 0 ${theme.layout.gap};
            box-sizing: border-box;
            position: relative;
          }
        `}</style>
      </section>
    </Fragment>
  )
}

export default React.memo(Page)
