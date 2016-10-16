import { always } from 'ramda';
import { createAction } from 'redux-actions';
import { DEC, INC } from './actionTypes';

export const dec = createAction(DEC, always(true));
export const inc = createAction(INC, always(true));
