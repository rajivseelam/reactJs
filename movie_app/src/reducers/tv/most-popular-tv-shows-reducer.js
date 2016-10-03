export default function reducer(state={
    tvShowsCount: 0,
    mostPopularTvShows: [],
    fetching: false,
    fetched: false,
    error: false
}, action) {
    switch (action.type) {
      case "CLEAR_MOST_POPULAR_TV_SHOWS": {
          return {
              ...state,
              mostPopularTvShows: [],
              fetched: false,
              fetching: true
          }
          break;
      }
      case "FETCH_MOST_POPULAR_TV_SHOWS_REJECTED": {
          return {
              ...state,
              fetching: false,
              fetched: false,
              mostPopularTvShows: [],
              error: action.payload
          }
          break;
      }
      case "FETCH_MOST_POPULAR_TV_SHOWS_FULFILLED": {
          return {
              ...state,
              fetching: false,
              fetched: true,
              tvShowsCount: action.payload.count,
              mostPopularTvShows: action.payload.results
          }
          break;
      }
    }
    return state;
}
