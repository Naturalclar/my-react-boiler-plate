/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import { shallow } from 'enzyme'
import PageTemplate from '.'

describe('component', () => {
  it('renders without crashing', () => {
    expect(shallow(<PageTemplate title="foo">Hello World!</PageTemplate>))
  })
})
