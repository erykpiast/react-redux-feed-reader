import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import addLifecycleHooks from 'utils/lifecycle-hooks';
import Loader from 'components/loader'; // eslint-disable-line

import { selectState } from './reducers';
import styles from './styles.css';

import Meta from './components/meta';
import Item from './components/item';


function FeedViewer({ error, data, loading }) {
  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.wrapper}>
      {error ? <p className={styles.error}>{error.message}</p> : null}
      {data ?
        <div className={styles.feed}>
          <Meta {...data.meta} />
          <ul className={styles.list}>{
            data.items.map((item, index) => (
              <li className={styles.listItem} key={index}>
                <Item {...item} />
              </li>
            ))
          }</ul>
        </div> :
        null}
    </div>
  );
}

FeedViewer.propTypes = {
  error: PropTypes.object,
  data: PropTypes.object,
  loading: PropTypes.bool.isRequired,
};

export default connect(selectState)(addLifecycleHooks({
  componentDidMount() { console.log('FeedVeiwer component mounted!'); }, // eslint-disable-line no-console
}, FeedViewer));
