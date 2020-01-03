import {
  CREATE_EVENT_LOADING,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE
} from '../actions/event-creation';

const initialState = {
  // img: '',
  // title: '',
  // desc: '',
  // creator: '',
  // location: '',
  // start_date: '',
  // end_date: '',
  // capacity: ''
  details: null,
  loading: false,
  error: ''
};

const createEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EVENT_LOADING:
      return {
        ...state,
        error: '',
        loading: true
      };
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        error: '',
        loading: false,
        details: {
          ...action.payload
        }
      };
    case CREATE_EVENT_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default createEventReducer;
