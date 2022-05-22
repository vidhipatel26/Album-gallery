import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import immutable from 'redux-immutable-state-invariant';
import rooteReducer from './rootReducer';

export const listMiddleware = [
  thunk,
  ...([createLogger(), immutable()]),
];

export default () => {
  const initialState = {};
  const store = createStore(rooteReducer, initialState, applyMiddleware(...listMiddleware));

  return store;
};
