import axios from 'axios';
import { apiURL } from '../config';

export const FETCH_EVENTS_LOADING = 'FETCH_EVENTS_LOADING';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENT_SUCCESS = 'FETCH_EVENT_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';

export const getAllEvents = () => async dispatch => {
  dispatch({ type: FETCH_EVENTS_LOADING });
  try {
    const eventsInfo = await axios.get(`${apiURL}/api/events`);
    dispatch({
      type: FETCH_EVENTS_SUCCESS,
      payload: eventsInfo.data.event,
    });
  } catch (error) {
    dispatch({
      type: FETCH_EVENTS_FAILURE,
      payload: error.response?.data.message,
    });
  }
};

export const getEvent = id => async dispatch => {
  dispatch({ type: FETCH_EVENTS_LOADING });
  try {
    const eventRes = await axios.get(`${apiURL}/api/events/${id}`);
    dispatch({
      type: FETCH_EVENT_SUCCESS,
      payload: eventRes.data.event,
    });
  } catch (error) {
    dispatch({
      type: FETCH_EVENTS_FAILURE,
      payload: error.response?.data.message,
    });
  }
};
