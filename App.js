/* @flow */

import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Main from './src'
import { myReducers } from './reducers'

const store = createStore(myReducers)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
