import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import { GlobalStyle } from './styles/GlobalStyle';
import EventPage from './components/EventPage';
import Signup from './components/Signup';
// import MainForm from './components/MainForm';
import EventForm from './components/EventForm';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={EventPage} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/create-event' component={EventForm} />
        {/* <Route path='/agenda' component={Agenda} /> */}
      </Switch>
    </Router>
  );
};

export default App;
