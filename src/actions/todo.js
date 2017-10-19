/* eslint-disable import/prefer-default-export */

/**
 * https://github.com/kriasoft/react-starter-kit/blob/feature/react-intl/src/actions/intl.js
 */
import { TODO_SERVICE_SUCCESS } from '../constants';

export function getTodoService(payload) {
  return {
    type: TODO_SERVICE_SUCCESS,
    payload,
  };
}
