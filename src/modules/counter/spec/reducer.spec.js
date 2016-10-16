/* eslint-env mocha */
/* eslint-disable import/no-extraneous-dependencies */

import { assert } from 'chai';

import { reducer } from '../reducer';
import { dec, inc } from '../actions';

suite('counter reducer', () => {
  let initialState;

  setup(() => {
    initialState = reducer(undefined, { type: '' });
  });


  test('default state is zero', () => {
    assert.deepEqual(initialState, { value: 0 });
  });

  test('dec action decreases value by 1', () => {
    assert.deepEqual(reducer(initialState, dec()), { value: -1 });
  });

  test('inc action increases value by 1', () => {
    assert.deepEqual(reducer(initialState, inc()), { value: 1 });
  });
});
