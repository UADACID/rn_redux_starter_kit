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

  onAddUser = () => {
    const { myList, name, addUser, clearName } = this.props
    const id = myList.length + 1
    const user = {
      id,
      name
    }
    if (name != '') {
      addUser(user)
      clearName()
    }
  }

  onChangeName = (name) => {
    this.props.onChangeName(name)
  }

  onRemoveUser = (id) => {
    this.props.removeUser(id)
  }

  render() {
    // console.log(this.props.myList);
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

const mapDispatchToProps = (dispatch) => {
  const addUser = (user) => dispatch({type:"ADD_USER", payload:user})
  const clearName = () => dispatch({type:"REMOVE_NAME"})
  const onChangeName = (name) => dispatch({type:"CHANGE_NAME", payload:name})
  const removeUser = (id) => dispatch({type:"REMOVE_USER", payload:id})

  return {
    addUser,
    clearName,
    onChangeName,
    removeUser
  }

}

const mapStateToProps = (state) => {
  return {
    myList : state.myList,
    name : state.name
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

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
