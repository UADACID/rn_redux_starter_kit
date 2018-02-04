/* @flow */

import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Main from './src'

const store = createStore(()=>[])

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
