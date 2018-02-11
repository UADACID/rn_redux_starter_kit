/* @flow */

import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Main from './src'

import RootNavigator from './navigator'
import configureStore from './store';
const { persistor, store } = configureStore();
console.log(store);
// // console.log(configureStore);
// console.log({persistor, store});

const onBeforeLift = () => {
  // take some action before the gate lifts
}
// import { myReducers } from './reducers'

// const store = createStore(myReducers)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <PersistGate
          loading={<ActivityIndicator />}
          onBeforeLift={onBeforeLift}
          persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
