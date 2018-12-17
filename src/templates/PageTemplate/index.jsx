/* eslint-disable react/prop-types */
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

// TODO: prop validation with typescript
const PageTemplate = ({ title, children }) => (
  <Container>
    <Header title={title} />
    <Body>{children}</Body>
    <Footer />
  </Container>
)

export default PageTemplate
