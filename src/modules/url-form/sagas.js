import { take, put } from 'redux-saga/effects';

import { SUBMIT } from './actionTypes';
import { request as requestFeed } from '../feed-viewer/actions';

function* handleSubmit() {
  while (true) { // eslint-disable-line no-constant-condition
    const { payload: { url } } = yield take(SUBMIT);
    yield put(requestFeed(url));
  }
}


export default [handleSubmit];
