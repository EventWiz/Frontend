import axios from 'axios';
import { apiURL } from '../config';
import { setToken } from '../utils/localStorage';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loggedIn = user => {
  return { type: LOGIN_SUCCESS, payload: user };
};

export const logIn = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post(`${apiURL}/api/auth/login`, creds)
    .then(res => {
      setToken(res.data.token);
      dispatch(loggedIn(res.data.user));
      return true;
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message });
    });
};
