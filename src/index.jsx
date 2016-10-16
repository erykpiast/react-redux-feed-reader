import React from 'react';
import UrlForm from 'modules/url-form';
import FeedViewer from 'modules/feed-viewer';

import styles from './styles/app.css';

export default function App() {
  return (
    <div className={styles.page}>
      <UrlForm />
      <FeedViewer />
    </div>
  );
}
