/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class PageTwo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the PageTwo component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
