import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background: black;
  color: white;
  display: flex;
  align-items: center;
  height: 4rem;
  position: relative;
`

const HeaderLogo = styled.div`
  flex: 1;
  font-size: 1.5rem;
  padding: 1rem;
  font-weight: lighter;
`

const HeaderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  height: 4rem;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`

const Header = ({ title }) => (
  <StyledHeader>
    <HeaderLogo>{title}</HeaderLogo>
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
