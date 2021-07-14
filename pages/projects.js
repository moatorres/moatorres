import React from 'react'
import Page from '@components/page'
import MainHeader from '@features/navigation/main-header'

const Projects = () => {
  return (
    <Page size="mini">
      <MainHeader />
      <Page.Content>
        <h1>Projects</h1>
      </Page.Content>
    </Page>
  )
}

export default Projects
