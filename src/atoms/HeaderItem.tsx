import * as React from 'react'
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

interface HeaderItemInterface {
  children: React.ReactChild
}

const HeaderItem: React.FC<HeaderItemInterface> = ({ children }) => (
  <Item>{children}</Item>
)

export default HeaderItem
