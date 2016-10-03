export default function reducer(state={
    moviesCount: 0,
    topRatedMovies: [],
    fetching: false,
    fetched: false,
    error: false
}, action) {
    switch (action.type) {
      case "CLEAR_FETCH_TOP_RATED_MOVIES": {
          return {
              ...state,
              topRatedMovies: [],
              fetched: false,
              fetching: true
          }
          break;
      }
      case "FETCH_TOP_RATED_MOVIES_REJECTED": {
          return {
              ...state,
              fetching: false,
              fetched: false,
              topRatedMovies: [],
              error: action.payload
          }
          break;
      }
      case "FETCH_TOP_RATED_MOVIES_FULFILLED": {
          return {
              ...state,
              fetching: false,
              fetched: true,
              moviesCount: action.payload.count,
              topRatedMovies: action.payload.results
          }
          break;
      }
    }
    return state;
}
