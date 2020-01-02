import axios from 'axios';
import { apiURL } from '../config';
import { setToken } from '../utils/localStorage';

export const AUTH_START = 'AUTH_START';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

export const loggedIn = user => {
  return { type: LOGIN_SUCCESS, payload: user };
};

export const logIn = creds => dispatch => {
  dispatch({ type: AUTH_START });
  return axios
    .post(`${apiURL}/api/auth/login`, creds)
    .then(res => {
      setToken(res.data.token);
      dispatch(loggedIn(res.data.user));
      return true;
    })
    .catch(err => {
      dispatch({ type: AUTH_FAILURE, payload: err.response.data.message });
    });
};

export const signUp = creds => dispatch => {
  dispatch({ type: AUTH_START });
  return axios
    .post(`${apiURL}/api/auth/register`, creds)
    .then(res => {
      dispatch({ type: SIGNUP_SUCCESS });
      if (res.data.user) {
        return true;
      }
    })
    .catch(err => {
      dispatch({ type: AUTH_FAILURE, payload: err.response.data.message });
      return false;
    });
};
