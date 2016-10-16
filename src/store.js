import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import feedViewerReducers from 'modules/feed-viewer/reducers';
import feedViewerSagas from 'modules/feed-viewer/sagas';
import urlFormSagas from 'modules/url-form/sagas';

const reducer = combineReducers({ ...feedViewerReducers });
const saga = createSagaMiddleware();

const devTools = (process.env.NODE_ENV === 'development') &&
  window.__REDUX_DEVTOOLS_EXTENSION__ && // eslint-disable-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__(); // eslint-disable-line no-underscore-dangle

export default createStore(reducer, devTools, applyMiddleware(saga));

[...feedViewerSagas, ...urlFormSagas].forEach(s => saga.run(s));
