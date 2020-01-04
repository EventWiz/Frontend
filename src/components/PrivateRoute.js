import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../utils/localStorage';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const currentUser = getToken();
      if (!currentUser) {
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                prevLocation: props.history.location.pathname,
                message: 'You need to login first!'
              }
            }}
          />
        );
      }

      return <Component {...props} />;
    }}
  />
);
