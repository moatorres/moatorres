import React, { Fragment } from 'react'
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <title>Moa Torres – Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default App
