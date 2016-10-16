import { __, merge, prop } from 'ramda';
import { handleActions } from 'redux-actions';
import { ERROR, REQUEST, SUCCESS } from './actionTypes';

const KEY = 'feed';

export const feedReducer = handleActions({
  [REQUEST]: merge(__, {
    data: null,
    error: null,
    loading: true,
  }),
  [SUCCESS]: (state, { payload }) => ({
    ...state,
    data: payload,
    error: null,
    loading: false,
  }),
  [ERROR]: (state, { payload }) => ({
    ...state,
    data: null,
    error: payload,
    loading: false,
  }),
}, {
  data: null,
  error: null,
  loading: false,
});

export const selectState = prop(KEY);

export default { [KEY]: feedReducer };
