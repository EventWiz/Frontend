import {
  FETCH_EVENTS_LOADING,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENT_SUCCESS,
  FETCH_EVENTS_FAILURE,
  REGISTER_SUCCESS,
} from '../actions/events';

const initialState = {
  loading: false,
  events: [],
  event: null,
  registered: null,
  error: '',
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS_LOADING:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_EVENT_SUCCESS:
      return {
        ...state,
        event: action.payload,
        loading: false,
        error: '',
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registered: action.payload,
        loading: false,
        error: '',
      };
    case FETCH_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default eventReducer;
