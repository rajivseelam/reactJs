export default function reducer(state={
    moviesCount: 0,
    mostPopularMovies: [],
    fetching: false,
    fetched: false,
    error: false
}, action) {
    switch (action.type) {
      case "CLEAR_FETCH_MOST_POPULAR_MOVIES": {
          return {
              ...state,
              mostPopularMovies: [],
              fetched: false,
              fetching: true
          }
          break;
      }
      case "FETCH_MOST_POPULAR_MOVIES_REJECTED": {
          return {
              ...state,
              fetching: false,
              fetched: false,
              mostPopularMovies: [],
              error: action.payload
          }
          break;
      }
      case "FETCH_MOST_POPULAR_MOVIES_FULFILLED": {
          return {
              ...state,
              fetching: false,
              fetched: true,
              moviesCount: action.payload.count,
              mostPopularMovies: action.payload.results
          }
          break;
      }
    }
    return state;
}
