import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import { GlobalStyle } from './styles/GlobalStyle';
import EventPage from './components/EventPage';
import Signup from './components/Signup';
import Event from './components/Event';
import { PrivateRoute } from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={EventPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/events/:id" component={Event} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </Router>
  );
};

export default App;
