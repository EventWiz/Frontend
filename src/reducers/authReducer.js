import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS } from '../actions/auth';

const initialState = {
  user: null,
  error: '',
  loading: false,
  loggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: '',
        loading: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: '',
        loading: false,
        loggedIn: true,
        user: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
