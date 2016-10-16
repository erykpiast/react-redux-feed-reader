import { combineReducers, createStore } from 'redux';
import counterReducer from 'modules/counter/reducer';

const reducer = combineReducers({ ...counterReducer });
const devTools = (process.env.NODE_ENV === 'development') &&
  window.__REDUX_DEVTOOLS_EXTENSION__ && // eslint-disable-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__(); // eslint-disable-line no-underscore-dangle

export default createStore(reducer, devTools);
