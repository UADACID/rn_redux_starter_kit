/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'

class Main extends Component {

  state = {
    name : ""
  }

  onAddUser = () => {
    const id = this.props.myList.length + 1
    const name = this.props.name
    const user = {
      id: id,
      name: name
    }
    this.props.dispatch({type:"ADD_USER", payload:user})
    this.props.dispatch({type:"REMOVE_NAME"})

  }

  onChangeName = (name) => {
    this.props.dispatch({type:"CHANGE_NAME", payload:name})
  }

  onRemoveUser = (id) => {
    this.props.dispatch({type:"REMOVE_USER", payload:id})
  }

  render() {
    console.log(this.props.myList);
    return (
      <View style={styles.container}>
        <TextInput
        style={styles.form}
        onChangeText={this.onChangeName}
        value={this.props.name}
        placeholder='type name here'
        />
        <TouchableOpacity onPress={this.onAddUser}  style={styles.addButton}>
          <Text style={styles.textButton}>tambah user</Text>
        </TouchableOpacity>
        <ScrollView>
          {this.props.myList.map((obj,i) => {
            return (
              <Text key={i} style={styles.textList} onPress={()=>this.onRemoveUser(obj.id)}>{obj.id}. {obj.name}</Text>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myList : state.myList,
    name : state.name
  }
}

export default connect(mapStateToProps)(Main)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },
  form : {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10
  },
  addButton: {
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 4,
    justifyContent:'center',
    alignItems: 'center'
  },
  textButton: {
    color:'#fff'
  },
  textList: {
    padding: 5,
    fontSize: 20,
    borderBottomWidth: 1
  }
});
