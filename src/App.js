import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/Login';
import { GlobalStyle } from './styles/GlobalStyle';
import EventPage from './components/Events';
import Signup from './components/Signup';
import EventForm from './components/EventForm';
import Agenda from './components/Agenda';
import Event from './components/Event';
import { PrivateRoute } from './components/PrivateRoute';
import { loggedIn } from './actions/auth';
import { getToken } from './utils/localStorage';
import Logout from './components/Logout';
import { AuthRoute } from './components/AuthRoute';

const App = ({ loggedIn: logInUser }) => {
  useEffect(() => {
    const token = getToken();
    if (token) {
      logInUser();
    }
  }, [logInUser]);

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={EventPage} />
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/signup" component={Signup} />
        <Route path="/events/:eventId" component={Event} />
        <PrivateRoute path="/create-event" component={EventForm} />
        <PrivateRoute path="/agenda" component={Agenda} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </Router>
  );
};

export default connect(state => state.authReducer, { loggedIn })(App);
