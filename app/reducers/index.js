import { combineReducers } from 'redux'
import navReducer from './navReducer'
import tabReducer from './tabReducer'

const rootReducer = combineReducers({
  tabReducer,
  navReducer
})

export default rootReducer
