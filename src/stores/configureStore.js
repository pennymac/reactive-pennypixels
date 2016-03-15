import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {createReducer} from 'fluxury-redux';

import stores from './index';

export function configureStore() {

  let rootReducer = createReducer(...stores);

  const logger = createLogger({
    collapsed: true,
    predicate: () =>
    process.env.NODE_ENV === `development`, // eslint-disable-line no-unused-vars
  });

  const middleware = applyMiddleware(thunkMiddleware, logger);
  const createStore2 = middleware(createStore)
  const store = (window.devToolsExtension ? window.devToolsExtension()(createStore2) : createStore2)(rootReducer, []);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./index', () => {
      var stores = require('../index').default;
      const nextRootReducer = createReducer(...stores);
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
