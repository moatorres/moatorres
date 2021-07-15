import React from 'react'
import { useRouter } from 'next/router'
import { useTheme } from '@components/themes'
import Page from '@components/page'
import Button from '@components/button'
import MainHeader from '@features/navigation/main-header'

const NotFound = () => {
  const router = useRouter()
  const theme = useTheme()
  return (
    <Page size="mini" title="404">
      <MainHeader />
      <Page.Content>
        <h1
          style={{
            fontSize: '6rem',
            lineHeight: '1',
            color: theme.colors.link,
          }}>
          404
        </h1>
        <h1>Page Not Found</h1>
        <p style={{ color: theme.colors.link }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button onClick={() => router.push('/')}>← Go Home</Button>
      </Page.Content>
    </Page>
  )
}

export default NotFound
