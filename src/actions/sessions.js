import axios from 'axios';
import { apiURL } from '../config';

export const CREATE_SESSION_LOADING = 'CREATE_SESSION_LOADING';
export const CREATE_SESSION_SUCCESS = 'CREATE_SESSION_SUCCESS';
export const CREATE_SESSION_FAILURE = 'CREATE_SESSION_FAILURE';

export const sessionCreate = session => ({
  type: CREATE_SESSION_SUCCESS,
  payload: session
});

export const createSession = details => async dispatch => {
  try {
    dispatch({ type: CREATE_SESSION_LOADING });
    console.log(details.agenda);
    const sessionDetails = await axios.post(
      `${apiURL}/api/sessions/create`,
      details.agenda
    );
    dispatch(sessionCreate(sessionDetails));
    return sessionDetails;
  } catch (error) {
    console.log(error);
    dispatch({
      type: CREATE_SESSION_FAILURE,
      payload: error.response.data.message
    });
  }
};
