import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Logo, HeaderItem } from '../../atoms'

const StyledHeader = styled.header`
  background: black;
  color: white;
  display: flex;
  align-items: center;
  height: 4rem;
  position: relative;
`

// TODO: prop validation with typescript
const Header = ({ title }) => (
  <StyledHeader>
    <Logo>{title}</Logo>
    <HeaderItem key="item1">item</HeaderItem>
    <HeaderItem key="item2">item</HeaderItem>
  </StyledHeader>
)

Header.defaultProps = {
  title: 'Title',
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
