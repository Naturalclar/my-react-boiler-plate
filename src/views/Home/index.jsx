import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Cat from '../../imgs/img_cat.svg';
import Increment from '../../imgs/img_increment.svg';
import Decrement from '../../imgs/img_decrement.svg';
import Reset from '../../imgs/img_reset.svg';
import { increment, decrement, reset } from '../../actions';

const HomeContainer = styled.div`
  padding-top: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HomeDisplayCount = styled.div`
  font-size: 5rem;
  font-weight: lighter;
  padding: 0.5rem;
`;

const HomeButtonList = styled.ul`
  display:flex;
  justify-content:center;
  align-items:center;
`;

const HomeButton = styled.img`
  max-height: 50px;
  transition: all 0.1s;
  filter: invert(.5);
  &:hover {
    filter: invert(.5) sepia(1) saturate(5) hue-rotate(180deg);
    transform: 'translateY(-1p);
  }
`;

const Home = ({counter, dispatch}) => {
  const filter = `invert(0.5) sepia(1) hue-rotate(${counter * 5}deg)`;
  return (
    <HomeContainer>
      <img src={Cat} style={{filter}}/>
      <HomeDisplayCount>
        {counter}
      </HomeDisplayCount>
      <HomeButtonList>
        <HomeButton key="increment" src={Increment} onClick={()=>dispatch(increment())}/>
        <HomeButton key="decrement" src={Decrement} onClick={()=>dispatch(decrement())}/>
        <HomeButton key="reset" src={Reset} onClick={()=>dispatch(reset())}/>
      </HomeButtonList>
    </HomeContainer>
  );
}

Home.propTypes = {
  counter: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (style) => ({
  counter:style.counter
});

export default connect(mapStateToProps)(Home);