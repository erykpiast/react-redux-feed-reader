import { always, invoker, pipe } from 'ramda';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import addLifecycleHooks from 'utils/lifecycle-hooks';
import { submit as submitAction } from './actions';
import styles from './styles.css';

const preventDefault = invoker(0, 'preventDefault');

function UrlForm({ submit }) {
  let urlInput;
  const onSubmit = pipe(preventDefault, () => submit({ url: urlInput.value }));

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <fieldset className={styles.fieldset}>
        <input
          className={styles.input}
          placeholder="feed URL"
          type="url"
          ref={(ref) => { urlInput = ref; }}
        />
        <button
          className={styles.submit}
          type="submit"
        >Load feed</button>
      </fieldset>
    </form>
  );
}

UrlForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default connect(always({}), {
  submit: submitAction,
})(addLifecycleHooks({
  componentDidMount() { console.log('UrlForm component mounted!'); }, // eslint-disable-line no-console
}, UrlForm));
