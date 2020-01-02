import axios from 'axios';
import { apiURL } from '../config';

export const FETCH_LOCATIONS_LOADING = 'FETCH_LOCATIONS_LOADING';
export const FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS';
export const FETCH_LOCATIONS_FAILURE = 'FETCH_LOCATIONS_FAILURE';

export const getEvents = events => ({
  type: FETCH_LOCATIONS_SUCCESS,
  payload: events.data
});

export const getAllEvents = () => async dispatch => {
  dispatch({ type: FETCH_LOCATIONS_LOADING });
  try {
    const eventsInfo = await axios.get(`${apiURL}/api/events`);
    dispatch(getEvents(eventsInfo));
  } catch (error) {
    dispatch({
      type: FETCH_LOCATIONS_FAILURE,
      payload: err.response.data.message
    });
  }
};
