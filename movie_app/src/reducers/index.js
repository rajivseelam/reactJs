import { combineReducers } from 'redux'
import searchReducer from './search/searchReducer'
import mostPopularCelebsReducer from './celebs/most-popular-celebs-reducer'
import nowPlayingReducer from './movie/now-playing-reducer'
import upcomingMoviesReducer from './movie/upcoming-movies-reducer'
import mostPopularMoviesReducer from './movie/most-popular-movies-reducer'
import topRatedMoviesReducer from './movie/top-rated-movies-reducer'
import tvShowsOnTvReducer from './tv/tv-shows-on-tv-reducer'
import mostPopularTvShowsReducer from './tv/most-popular-tv-shows-reducer'
import topRatedTvShowsReducer from './tv/top-rated-tv-shows-reducer'
import airingTodayTvShowsReducer from './tv/airing-today-tv-shows-reducer'

export default combineReducers({
  searchReducer,
  nowPlayingReducer,
  tvShowsOnTvReducer,
  mostPopularCelebsReducer,
  upcomingMoviesReducer,
  mostPopularMoviesReducer,
  topRatedMoviesReducer,
  mostPopularTvShowsReducer,
  topRatedTvShowsReducer,
  airingTodayTvShowsReducer
})
