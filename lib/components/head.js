import NextHead from 'next/head'
import React, { Fragment } from 'react'
import { useTheme } from './themes'

const defaults = {
  ogImage: '',
  title: 'Moa Torres — Portfolio',
  description: 'Full-stack developer and creative producer.',
}

const Head = ({
  title = defaults.title,
  description = defaults.description,
  image = defaults.ogImage,
  children,
}) => {
  const theme = useTheme()
  return (
    <NextHead>
      {/* Preload Font
      <link
        rel="preload"
        href=""
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      */}

      {/* Title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* Image */}
      <meta name="twitter:image" content={image} />
      <meta name="og:image" content={image} />

      {/* URL */}
      <meta name="og:url" content="https://moatorres.com" />

      {/* General */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta httpEquiv="Content-Language" content="en-GB, pt-BR" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@moatorres" />
      <meta name="apple-mobile-web-app-title" content="Moa" />
      <meta name="author" content="Moa Torres" />

      {/* Favicons */}
      <link rel="manifest" href="/favicons/manifest.json" />
      <meta name="theme-color" content="#000000" />
      <link rel="mask-icon" href="/favicons/pinned.svg" color="#000000" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />

      {/* Dynamic Favicon */}
      {theme.type === 'dark' ? (
        <Fragment>
          <link
            rel="alternate icon"
            type="image/png"
            href="/favicons/dark.png"
            key="favicon-alternate"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicons/dark.svg"
            key="favicon"
          />
        </Fragment>
      ) : (
        <Fragment>
          <link
            rel="alternate icon"
            type="image/png"
            href="/favicons/light.png"
            key="favicon-alternate"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicons/light.svg"
            key="favicon"
          />
        </Fragment>
      )}

      {children}
    </NextHead>
  )
}

export default Head
