import { combineReducers } from 'redux'
import searchReducer from './search/searchReducer'
import movieReducer from './movie/movieReducer'
import tvReducer from './tv/tvReducer'
import userReducer from './user/userReducer'
import mostPopularCelebsReducer from './celebs/most-popular-celebs-reducer'
import nowPlayingReducer from './movie/now-playing-reducer'
import tvShowsOnTvReducer from './tv/tv-shows-on-tv-reducer'

export default combineReducers({
  searchReducer,
  movieReducer,
  tvReducer,
  userReducer,
  nowPlayingReducer,
  tvShowsOnTvReducer,
  mostPopularCelebsReducer
})
