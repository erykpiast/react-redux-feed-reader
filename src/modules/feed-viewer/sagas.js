import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import * as api from './api';
import { REQUEST } from './actionTypes';
import { error, success } from './actions';
import feedParser from './parser';


function* fetchFeed({ payload: url }) {
  try {
    const feed = yield call(api.fetchFeed, url);
    yield put(success(feedParser(feed)));
  } catch (err) {
    yield put(error(err));
  }
}

function* handleFeedRequest() {
  yield* takeLatest(REQUEST, fetchFeed);
}


export default [handleFeedRequest];
