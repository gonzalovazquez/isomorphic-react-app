/* eslint no-underscore-dangle: 0 */
import { TODO_SERVICE_SUCCESS } from '../constants';

export default function runtime(state = {}, action) {
  switch (action.type) {
    case TODO_SERVICE_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
}
