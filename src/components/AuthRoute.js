import React from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import { getToken } from '../utils/localStorage';

export const AuthRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  return (
    <Route
      {...rest}
      render={props => {
        const currentUser = getToken();
        if (currentUser) {
          return <Redirect to={history.location.state?.prevLocation || '/'} />;
        }

        return <Component {...props} />;
      }}
    />
  );
};
