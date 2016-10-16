import React, { PropTypes } from 'react';
import styles from './styles.css';

export default function FeedMeta({ alternateUrl, title, selfUrl }) {
  return (
    <section className={styles.wrapper}>
      {title ?
        <h1 className={styles.title}>{title}</h1> :
        null}
      {alternateUrl ?
        <a className={styles.url} href={alternateUrl}>Go to page</a> :
        null}
      {selfUrl ?
        <a className={styles.url} href={selfUrl}>This feed</a> :
        null}
    </section>
  );
}

FeedMeta.propTypes = {
  alternateUrl: PropTypes.string,
  title: PropTypes.string,
  selfUrl: PropTypes.string,
};
