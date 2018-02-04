import { combineReducers } from 'redux'

let initialState = [
  {id:1, name:"Pratama"},
  {id:2, name:"Setya"},
] //inisiasi value awal untuk state

const myList = (state = initialState, action) => {
  return state
}

export const myReducers = combineReducers({
  myList
})
