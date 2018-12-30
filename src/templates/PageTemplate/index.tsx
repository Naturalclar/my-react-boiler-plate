import React from 'react'
import styled from 'styled-components'
import { Header, Footer } from '../../organisms'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Body = styled.main`
  flex: 1;
  padding-bottom: 2rem;
`

interface PageTemplateInterface {
  title: string
  children: React.ReactNode
}

const PageTemplate: React.FC<PageTemplateInterface> = ({ title, children }) => (
  <Container>
    <Header title={title} />
    <Body>{children}</Body>
    <Footer />
  </Container>
)

export default PageTemplate
