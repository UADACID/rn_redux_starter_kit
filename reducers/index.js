import { combineReducers } from 'redux'
import { myList } from './myList' // from another file
import { name } from './name'
import { navReducer } from '../navigator'
// console.log(navReducer);

const rootReducers = {
  myList,
  name,
  nav:navReducer
}

// export default myReducers


export default rootReducers
  // }
