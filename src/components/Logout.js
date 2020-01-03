import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const Logout = props => {
  useEffect(() => {
    props.logout();
  });

  return (
    <React.Fragment>
      <Redirect to="/" />
    </React.Fragment>
  );
};

export default connect(null, { logout })(Logout);
