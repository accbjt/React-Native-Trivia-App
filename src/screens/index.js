import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from '../store/reducers';
import { QuestionScreen, ScoreScreen, Home } from '.';

const store = createStore(
  combineReducers(reducers),
  compose(applyMiddleware(thunkMiddleware))
);

export function registerScreens() {
  Navigation.registerComponentWithRedux(`Home`, () => Home, Provider, store);
  Navigation.registerComponentWithRedux(
    `QuestionScreen`,
    () => QuestionScreen,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    'ScoreScreen',
    () => ScoreScreen,
    Provider,
    store
  );
}

export { default as Home } from './Home';
export { default as QuestionScreen } from './QuestionScreen';
export { default as ScoreScreen } from './ScoreScreen';
