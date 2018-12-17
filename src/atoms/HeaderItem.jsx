/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
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

// TODO: props validation with type script
const HeaderItem = ({ children }) => <Item>{children}</Item>

export default HeaderItem
