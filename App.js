import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Main from './src/components/Main';

import reducers from './src/reducers';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Main />
      </Provider>
    );
  }
}
