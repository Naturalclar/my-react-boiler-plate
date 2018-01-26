import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { header } from '../styles';

const Header = ({ title }) => (
  <header style={header.main}>
    <div style={header.logo}>{title}</div>
    <div key="item1" style={header.item}>item</div>
    <div key="item2" style={header.item}>item</div>
  </header>
);

Header.defaultProps = {
  title: 'Title',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Radium(Header);
