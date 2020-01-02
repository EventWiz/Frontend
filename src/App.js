import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" render={() => 'this is the Landing'} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
