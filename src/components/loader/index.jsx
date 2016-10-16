import React from 'react';

import styles from './styles.css';

export default function Loader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader} />
      <span className={styles.text}>Loading...</span>
    </div>
  );
}
