import * as React from 'react'
import styled from 'styled-components'
import { HeaderLogo, HeaderItem } from '../../atoms'

const StyledHeader = styled.header`
  background: black;
  color: white;
  display: flex;
  align-items: center;
  height: 4rem;
  position: relative;
`

interface HeaderInterface {
  title: string
}

const Header: React.FC<HeaderInterface> = ({ title }) => (
  <StyledHeader>
    <HeaderLogo>{title}</HeaderLogo>
    <HeaderItem key="item1">item</HeaderItem>
    <HeaderItem key="item2">item</HeaderItem>
  </StyledHeader>
)

Header.defaultProps = {
  title: 'Title',
}

export default Header
