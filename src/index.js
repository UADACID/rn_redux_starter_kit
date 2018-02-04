/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux'

class Main extends Component {
  render() {
    console.log(this.props.stateFromStore);
    return (
      <View style={styles.container}>
        <Text>I'm the Main component</Text>
        <ScrollView>
          {this.props.myList.map((obj,i) => {
            return (
              <Text key={i}>{obj.name}</Text>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myList : state.myList
  }
}

export default connect(mapStateToProps)(Main)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },
});
