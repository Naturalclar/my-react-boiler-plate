import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import styled from 'styled-components'
import { Cat, Increment, Decrement, Reset } from '../../assets/images'
import { increment, decrement, reset } from '../../actions'

const HomeContainer = styled.div`
  padding-top: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const HomeDisplayCount = styled.div`
  font-size: 5rem;
  font-weight: lighter;
  padding: 0.5rem;
`

const HomeButtonList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`

const HomeButton = styled.img`
  max-height: 50px;
  transition: all 0.1s;
  filter: invert(.5);
  &:hover {
    filter: invert(.5) sepia(1) saturate(5) hue-rotate(180deg);
    transform: 'translateY(-1p);
  }
`

interface HomeInterface {
  counter: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

const Home: React.FC<HomeInterface> = ({
  counter,
  increment,
  decrement,
  reset,
}) => {
  const filter = `invert(0.5) sepia(1) hue-rotate(${counter * 5}deg)`
  return (
    <HomeContainer>
      <img src={Cat} alt="cat" style={{ filter }} />
      <HomeDisplayCount>{counter}</HomeDisplayCount>
      <HomeButtonList>
        <HomeButton key="increment" src={Increment} onClick={increment} />
        <HomeButton key="decrement" src={Decrement} onClick={decrement} />
        <HomeButton key="reset" src={Reset} onClick={reset} />
      </HomeButtonList>
    </HomeContainer>
  )
}

// TODO: set type for state
const mapStateToProps = (style: any) => ({
  counter: style.counter,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: () => dispatch(reset()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
