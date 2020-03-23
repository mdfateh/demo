import {UPDATE_APP_STATE, UPDATE_BULK_APP_STATE} from './types';

export function updateAppState(name, value) {
  return {
    type: UPDATE_APP_STATE,
    payload: {
      name,
      value,
    },
  };
}

export function updateBulkAppState(values) {
  return {
    type: UPDATE_BULK_APP_STATE,
    payload: {
      values,
    },
  };
}
