/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './store/reducers';

import Home from './screens/Home';

const store = createStore(
  combineReducers(reducers),
  compose(applyMiddleware(thunkMiddleware))
);

const App = props => (
  <Provider store={store}>
    <Home {...props} />
  </Provider>
);

export default App;
