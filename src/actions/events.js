import axios from 'axios';
import { apiURL } from '../config';

export const FETCH_EVENTS_LOADING = 'FETCH_EVENTS_LOADING';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';

export const getEvents = events => ({
  type: FETCH_EVENTS_SUCCESS,
  payload: events.data
});

export const getAllEvents = () => async dispatch => {
  dispatch({ type: FETCH_EVENTS_LOADING });
  try {
    const eventsInfo = await axios.get(`${apiURL}/api/events`);
    dispatch(getEvents(eventsInfo));
  } catch (error) {
    dispatch({
      type: FETCH_EVENTS_FAILURE,
      payload: err.response.data.message
    });
  }
};
