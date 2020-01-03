import { combineReducers } from 'redux';
import authReducer from './authReducer';
import eventReducer from './eventsReducer';
import createEventReducer from './createEventReducers';

const rootReducer = combineReducers({
  authReducer,
  eventReducer,
  createEventReducer
});

export default rootReducer;
