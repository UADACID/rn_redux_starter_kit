import { combineReducers } from 'redux'
import { myList } from './myList' // from another file
import { name } from './name'
import authReducer from './authReducers';

const rootReducers = {
  myList,
  name,
  authReducer
}

// export default myReducers


export default rootReducers
  // }
