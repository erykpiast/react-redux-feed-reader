import { createAction } from 'redux-actions';
import { ERROR, REQUEST, SUCCESS } from './actionTypes';

export const error = createAction(ERROR);
export const success = createAction(SUCCESS);
export const request = createAction(REQUEST);
