export default function reducer(state={
    moviesCount: 0,
    upcomingMovies: [],
    dates: {
      "maximum": null,
      "minimum": null
    },
    fetching: false,
    fetched: false,
    error: false
}, action) {
    switch (action.type) {
      case "CLEAR_FETCH_UPCOMING_MOVIES": {
          return {
              ...state,
              upcomingMovies: [],
              fetched: false,
              fetching: true
          }
          break;
      }
      case "FETCH_UPCOMING_MOVIES_REJECTED": {
          return {
              ...state,
              fetching: false,
              fetched: false,
              upcomingMovies: [],
              error: action.payload
          }
          break;
      }
      case "FETCH_UPCOMING_MOVIES_FULFILLED": {
          return {
              ...state,
              fetching: false,
              fetched: true,
              dates: action.payload.dates,
              moviesCount: action.payload.count,
              upcomingMovies: action.payload.results
          }
          break;
      }
    }
    return state;
}
