import React from 'react'
import Page from '@components/page'
import MainHeader from '@features/navigation/main-header'

const About = () => {
  return (
    <Page size="mini">
      <MainHeader />
      <Page.Content>About Page</Page.Content>
    </Page>
  )
}

export default About
