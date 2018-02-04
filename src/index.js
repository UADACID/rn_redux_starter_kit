/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'

class Main extends Component {
  render() {
    // console.log(this.props.stateFromStore);
    return (
      <View style={styles.container}>
        <Text>I'm the Main component</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stateFromStore : state
  }
}

export default connect(mapStateToProps)(Main)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
