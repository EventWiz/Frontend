import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import { GlobalStyle } from './styles/GlobalStyle';
import EventPage from './components/EventPage';
import Signup from './components/Signup';
import Event from './components/Event';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={EventPage} />
        <Route path='/login' component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/event/:id" component={Event} />
      </Switch>
    </Router>
  );
};

export default App;
