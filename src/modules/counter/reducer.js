import { always, dec, inc, lensProp, over, prop } from 'ramda';
import { handleActions } from 'redux-actions';
import { DEC, INC } from './actionTypes';

const KEY = 'counter';
const value = lensProp('value');
const initialState = over(value, always(0), { });

export const reducer = handleActions({
  [DEC]: over(value, dec),
  [INC]: over(value, inc),
}, initialState);

export const selectState = prop(KEY);

export default { [KEY]: reducer };
