/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { shallow } from 'enzyme'
import Home from '.'

it('renders without crashing', () => {
  expect(shallow(<Home />))
})
