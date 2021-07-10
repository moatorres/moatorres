import React, { Fragment } from 'react'
import Head from 'next/head'
import Normalize from '../lib/components/normalize'
import { ThemeProvider } from '../lib/components/themes'

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <title>Moa Torres – Portfolio</title>
      </Head>
      <ThemeProvider>
        <Normalize />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  )
}

export default App
