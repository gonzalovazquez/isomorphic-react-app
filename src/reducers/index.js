import { combineReducers } from 'redux';
import runtime from './runtime';
import todo from './todo';

export default combineReducers({
  todo,
  runtime,
});
