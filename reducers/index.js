import { combineReducers } from 'redux'

let initialState = [] //inisiasi value awal untuk state

const myList = (state = initialState, action) => {
  return state
}

export const myReducers = combineReducers({
  myList
})
