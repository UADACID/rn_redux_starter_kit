import { combineReducers } from 'redux'
import { myList } from './myList' // from another file
import { name } from './name'

export const myReducers = combineReducers({
  myList,
  name
})
