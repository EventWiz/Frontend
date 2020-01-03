import { combineReducers } from 'redux';
import authReducer from './authReducer';
import eventReducer from './eventsReducer';
import createEventReducer from './createEventReducers';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({
  authReducer,
  eventReducer,
  createEventReducer,
  sessionReducer
});

export default rootReducer;
