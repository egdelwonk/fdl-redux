import { createStore, compose, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// Setup the initial state of our entire application
const initialState = {
  counter: 0
};

// Initiate a new logger instance
const logger = createLogger();

// Build the list of middleware
// Thunk: https://github.com/reduxjs/redux-thunk/blob/master/src/index.js
// Logger: https://github.com/evgenyrodionov/redux-logger/blob/master/src/index.js
const middleware = [thunk, logger];

// If we have Redux Devtools installed, use it's version of compose(), otherwise, use the one we imported.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));

// createStore() takes a reducer, preloaded state, and enhancers
// http://redux.js.org/docs/api/createStore.html#createstorereducer-preloadedstate-enhancer
const store = createStore(rootReducer, initialState, enhancer);

// Export the store
export default store;
