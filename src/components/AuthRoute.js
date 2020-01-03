import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../utils/localStorage';

export const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const currentUser = getToken();
      if (currentUser) {
        return <Redirect to="/" />;
      }

      return <Component {...props} />;
    }}
  />
);
