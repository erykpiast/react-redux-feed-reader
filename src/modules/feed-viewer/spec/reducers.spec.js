/* eslint-env mocha */
/* eslint-disable import/no-extraneous-dependencies */

import { assert } from 'chai';

import { feedReducer } from '../reducers';
import { error, request, success } from '../actions';

suite('feed reducer', () => {
  let initialState;

  setup(() => {
    initialState = feedReducer(undefined, { type: '' });
  });

  suite('data', () => {
    test('default state has no data', () => {
      assert.equal(initialState.data, null);
    });

    test('request action clears data', () => {
      const state = feedReducer({ data: [1, 2, 3] }, request('http://aaa.bbb/'));
      assert.equal(state.data, null);
    });

    test('error action clears data', () => {
      const state = feedReducer({ data: [1, 2, 3] }, error(new Error('not found')));
      assert.equal(state.data, null);
    });

    test('success action updates data with its payload', () => {
      const state = feedReducer({ data: null }, success(42));
      assert.equal(state.data, 42);
    });
  });

  suite('error', () => {
    test('default state has no error', () => {
      assert.equal(initialState.error, null);
    });

    test('request action clears data', () => {
      const state = feedReducer({ error: new Error('not found') }, request('http://aaa.bbb/'));
      assert.equal(state.error, null);
    });

    test('error action updates data with its payload', () => {
      const err = new Error('not found');
      const state = feedReducer({ error: null }, error(err));
      assert.equal(state.error, err);
    });

    test('success action clears error', () => {
      const state = feedReducer({ error: new Error('not found') }, success(42));
      assert.equal(state.error, null);
    });
  });

  suite('loading', () => {
    test('default state has loading false', () => {
      assert.equal(initialState.loading, false);
    });

    test('request action sets loading to true', () => {
      const state = feedReducer({ loading: false }, request('http://aaa.bbb/'));
      assert.equal(state.loading, true);
    });

    test('error action sets loading to false', () => {
      const state = feedReducer({ loading: true }, error(new Error('not found')));
      assert.equal(state.loading, false);
    });

    test('success action sets loading to false', () => {
      const state = feedReducer({ loading: true }, success(42));
      assert.equal(state.loading, false);
    });
  });
});
