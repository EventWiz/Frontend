import {
  CREATE_SESSION_LOADING,
  CREATE_SESSION_SUCCESS,
  CREATE_SESSION_FAILURE
} from '../actions/sessions';

const initialState = {
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
        details: [...action.payload]
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
