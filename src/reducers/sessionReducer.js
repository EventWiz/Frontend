import {
  CREATE_SESSION_LOADING,
  CREATE_SESSION_SUCCESS,
  CREATE_SESSION_FAILURE
} from '../actions/sessions';
import { CREATE_EVENT_SUCCESS } from '../actions/event-creation';

const initialState = {
  event_id: '',
  details: [],
  loading: false,
  error: ''
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SESSION_LOADING:
      return {
        ...state,
        error: '',
        loading: true
      };
    case CREATE_SESSION_SUCCESS:
      return {
        ...state,
        error: '',
        loading: false,
        details: action.payload
      };
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        error: '',
        loading: false,
        event_id: action.payload.data.event.id
      };

    case CREATE_SESSION_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default sessionReducer;
