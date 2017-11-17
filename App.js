import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Main from './src/components/Main';

import reducers from './src/reducers';

const store = createStore(
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
