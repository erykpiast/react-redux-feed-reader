import React, { PropTypes } from 'react';
import moment from 'moment';
import styles from './styles.css';

export default function FeedItem({ date, description, title }) {
  return (
    <section className={styles.wrapper}>
      {date ?
        <time className={styles.date}>{moment(date).format('D MMMM YYYY, hh:mm:ss')}</time>
        : null}
      {title ?
        <h2 className={styles.title}>{title}</h2>
        : null}
      {description ?
        <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
        : null}
    </section>
  );
}

FeedItem.propTypes = {
  description: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  title: PropTypes.string,
};
