import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './styles.scss';

import App from './index';
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
