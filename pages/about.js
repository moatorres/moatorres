import React from 'react'
import Page from '@components/page'
import MainHeader from '@features/navigation/main-header'

const About = () => {
  return (
    <Page title="About" size="mini">
      <MainHeader />
      <Page.Content>
        <h1>About</h1>
      </Page.Content>
    </Page>
  )
}

export default About
