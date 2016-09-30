import { combineReducers } from 'redux'
import searchReducer from './search/searchReducer'
import userReducer from './userReducer'

export default combineReducers({
  searchReducer,
  userReducer
})
