import React, { Fragment } from 'react'
import Head from '@components/head'
import Normalize from '@components/normalize'
import { ThemeProvider } from '@components/themes'

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head />
      <ThemeProvider themeType="dark">
        <Normalize />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  )
}

export default App
