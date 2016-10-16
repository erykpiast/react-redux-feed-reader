import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import addLifecycleHooks from 'utils/lifecycle-hooks';
import { selectState } from './reducer';
import { inc as incAction, dec as decAction } from './actions';

function Counter({ dec, inc, value }) {
  return (
    <div>
      <p>{ value }</p>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
}

Counter.propTypes = {
  dec: PropTypes.func.isRequired,
  inc: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default connect(selectState, {
  dec: decAction,
  inc: incAction,
})(addLifecycleHooks({
  componentDidMount() { console.log('counter component mounted!'); }, // eslint-disable-line no-console
}, Counter));
