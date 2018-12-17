/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const StyledLogo = styled.div`
  flex: 1;
  font-size: 1.5rem;
  padding: 1rem;
  font-weight: lighter;
`
// TODO: props validation with typescript
const Logo = ({ children }) => <StyledLogo>{children}</StyledLogo>

export default Logo
