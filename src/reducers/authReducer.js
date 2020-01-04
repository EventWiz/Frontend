import {
  AUTH_FAILURE,
  AUTH_START,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOGOUT
} from '../actions/auth';

const initialState = {
  user: null,
  error: '',
  loading: false,
  loggedIn: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        error: '',
        loading: true
      };
    case AUTH_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: '',
        loading: false,
        loggedIn: true,
        user: {
          ...action.payload
        }
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case LOGOUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default authReducer;
