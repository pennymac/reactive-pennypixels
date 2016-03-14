import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {createReducer} from 'fluxury-redux';
import CountStore from './CountStore';
import TodosStore from './TodosStore';

let rootReducer = createReducer(CountStore, TodosStore);

export default function configureStore(initialState) {
  const logger = createLogger({
    collapsed: true,
    predicate: () =>
    process.env.NODE_ENV === `development`, // eslint-disable-line no-unused-vars
  });

  const middleware = applyMiddleware(thunkMiddleware, logger);
  const createStore2 = middleware(createStore)
  const store = (window.devToolsExtension ? window.devToolsExtension()(createStore2) : createStore2)(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./CountStore', () => {
      const nextRootReducer = createReducer(CountStore, TodosStore);
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
