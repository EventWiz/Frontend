import { axiosWithAuth } from '../utils/axiosInstance';
import { apiURL } from '../config';

export const CREATE_EVENT_LOADING = 'CREATE_EVENT_LOADING';
export const CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS';
export const CREATE_EVENT_FAILURE = 'CREATE_EVENT_FAILURE';

export const eventCreate = event => ({
  type: CREATE_EVENT_SUCCESS,
  payload: event
});

export const createEvent = details => async dispatch => {
  try {
    dispatch({ type: CREATE_EVENT_LOADING });
    const eventDetails = await axiosWithAuth().post(
      `${apiURL}/api/events/create`,
      details
    );
    dispatch(eventCreate(eventDetails));
    return eventDetails;
  } catch (error) {
    console.log(error);
    dispatch({
      type: CREATE_EVENT_FAILURE,
      payload: error.response.data.message
    });
  }
};
