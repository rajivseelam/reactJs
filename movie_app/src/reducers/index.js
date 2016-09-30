import { combineReducers } from 'redux'
import searchReducer from './search/searchReducer'
import movieReducer from './movie/movieReducer'
import userReducer from './userReducer'

export default combineReducers({
  searchReducer,
  movieReducer,
  userReducer
})
