/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { shallow } from 'enzyme'
import Footer from '.'

it('renders without crashing', () => {
  expect(shallow(<Footer />))
})
