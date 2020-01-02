import {
  FETCH_EVENTS_LOADING,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE
} from '../actions/events';
import img from '../assets/img.jpg';
const initialState = {
  loading: false,
  events: [
    {
      id: 1,
      img: img,
      title: 'Social Media Week',
      start_date: '12-01-2020',
      location: 'Lagos'
    }
  ],
  error: ''
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS_LOADING:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        loading: false,
        error: ''
      };
    case FETCH_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default eventReducer;
