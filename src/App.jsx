import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Header, Footer } from './components';
import { Home } from './views';

const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`;
 
const Main = styled.main`
  flex: 1;
  padding-bottom: 2rem;
`;

const App = () => (
  <Router>
    <Container>
      <Header title="React-Boilerplate" />
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Main>
      <Footer />
    </Container>
  </Router>
);

export default App;
