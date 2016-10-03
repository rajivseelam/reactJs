export default function reducer(state={
    tvShowsCount: 0,
    topRatedTvShows: [],
    fetching: false,
    fetched: false,
    error: false
}, action) {
    switch (action.type) {
      case "CLEAR_TOP_RATED_TV_SHOWS": {
          return {
              ...state,
              topRatedTvShows: [],
              fetched: false,
              fetching: true
          }
          break;
      }
      case "FETCH_TOP_RATED_TV_SHOWS_REJECTED": {
          return {
              ...state,
              fetching: false,
              fetched: false,
              topRatedTvShows: [],
              error: action.payload
          }
          break;
      }
      case "FETCH_TOP_RATED_TV_SHOWS_FULFILLED": {
          return {
              ...state,
              fetching: false,
              fetched: true,
              tvShowsCount: action.payload.count,
              topRatedTvShows: action.payload.results
          }
          break;
      }
    }
    return state;
}
