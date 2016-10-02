export default function reducer(state={
    moviesCount: 0,
    nowPlayingMovies: [],
    dates: {
      "maximum": null,
      "minimum": null
    },
    fetching: false,
    fetched: false,
    error: false
}, action) {
    switch (action.type) {
      case "CLEAR_NOW_PLAYING_MOVIES": {
          return {
              ...state,
              nowPlayingMovies: [],
              fetched: false,
              fetching: true
          }
          break;
      }
      case "FETCH_NOW_PLAYING_MOVIES_REJECTED": {
          return {
              ...state,
              fetching: false,
              fetched: false,
              nowPlayingMovies: [],
              error: action.payload
          }
          break;
      }
      case "FETCH_NOW_PLAYING_MOVIES_FULFILLED": {
          return {
              ...state,
              fetching: false,
              fetched: true,
              dates: action.payload.dates,
              moviesCount: action.payload.count,
              nowPlayingMovies: action.payload.results
          }
          break;
      }
    }
    return state;
}
