import React from 'react'
import styled from 'styled-components'

const StyledLogo = styled.div`
  flex: 1;
  font-size: 1.5rem;
  padding: 1rem;
  font-weight: lighter;
`

interface LogoInterface {
  children: React.ReactChild
}

const Logo: React.FC<LogoInterface> = ({ children }) => (
  <StyledLogo>{children}</StyledLogo>
)

export default Logo
