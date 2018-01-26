import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StyleRoot } from 'radium';
import { Header, Footer } from './components';
import { Home } from './views/index.js';
import { app } from './styles';

const App = () => (
  <Router>
    <StyleRoot>
      <div style={app.main}>
        <Header title="React-Boilerplate" />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </StyleRoot>
  </Router>
);

export default App;
