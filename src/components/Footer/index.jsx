import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2rem;
`

const Footer = () => <StyledFooter>React-Boilerplate by Smashcat</StyledFooter>

export default Footer
