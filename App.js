import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Reactotron from 'reactotron-react-native';

import Main from './src/components/Main';

import reducers from './src/reducers';

if (__DEV__) {
  require('./reactotron');
}

const store = __DEV__
  ? Reactotron.createStore(
      reducers,
      applyMiddleware(thunk)
    )
  : createStore(
      reducers,
      applyMiddleware(thunk)
    );

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
