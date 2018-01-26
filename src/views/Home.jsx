import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { connect } from 'react-redux';
import Cat from '../imgs/img_cat.svg';
import Increment from '../imgs/img_increment.svg';
import Decrement from '../imgs/img_decrement.svg';
import Reset from '../imgs/img_reset.svg';
import { home } from '../styles';
import { increment, decrement, reset } from '../actions';

const Home = ({counter, dispatch}) => (
  <main style={home.main}>
    <img src={Cat} style={{...home.img, filter: `invert(0.5) sepia(1) hue-rotate(${counter * 5}deg)`}}/>
    <div style={home.counter}>
      {counter}
    </div>
    <div style={home.buttons}>
      <img key="increment" style={home.button} src={Increment} onClick={()=>dispatch(increment())}/>
      <img key="decrement" style={home.button} src={Decrement} onClick={()=>dispatch(decrement())}/>
      <img key="reset" style={home.button} src={Reset} onClick={()=>dispatch(reset())}/>
    </div>
  </main>
);

Home.propTypes = {
  counter: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (style) => ({
  counter:style.counter
});

export default connect(mapStateToProps)(Radium(Home));