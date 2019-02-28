// Import createStore and applyMiddleware
import { createStore, applyMiddleware, compose } from 'redux';
// Import thunk
import thunk from 'redux-thunk';
// Import root reducer
import rootReducer from './reducers';

const middleware = [thunk];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware)
  )
);

export default store;
