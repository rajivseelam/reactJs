import { combineReducers } from 'redux'
import searchReducer from './search/searchReducer'
import movieReducer from './movie/movieReducer'
import tvReducer from './tv/tvReducer'
import userReducer from './userReducer'

export default combineReducers({
  searchReducer,
  movieReducer,
  tvReducer,
  userReducer
})
