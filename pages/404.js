import React from 'react'
import Page from '@components/page'
import MainHeader from '@features/navigation/main-header'

const NotFound = () => {
  return (
    <Page size="mini" title="404 — Moa Torres">
      <MainHeader />
      <Page.Content>
        <h1 style={{ fontSize: '6rem' }}>404</h1>
        <h1>Page Not Found</h1>
      </Page.Content>
    </Page>
  )
}

export default NotFound
