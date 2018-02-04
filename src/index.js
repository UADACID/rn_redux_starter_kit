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

  onAddUser = () => {
    const id = this.props.myList.length + 1
    const user = {
      id: id,
      name:"Thuck key am"
    }
    this.props.dispatch({type:"ADD_USER", payload:user})
  }

  render() {
    console.log(this.props.myList);
    return (
      <View style={styles.container}>
        <Text onPress={this.onAddUser}>tambah user</Text>
        <ScrollView>
          {this.props.myList.map((obj,i) => {
            return (
              <Text key={i}>{obj.id}{obj.name}</Text>
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
