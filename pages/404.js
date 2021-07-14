import React from 'react'
import { useRouter } from 'next/router'
import Page from '@components/page'
import Button from '@components/button'
import MainHeader from '@features/navigation/main-header'

const NotFound = () => {
  const router = useRouter()
  return (
    <Page size="mini" title="404 — Moa Torres">
      <MainHeader />
      <Page.Content>
        <h1 style={{ fontSize: '6rem', lineHeight: '1', color: '#6146d8' }}>
          404
        </h1>
        <h1>Page Not Found</h1>
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <Button onClick={() => router.push('/')}>Go Home</Button>
      </Page.Content>
    </Page>
  )
}

export default NotFound
