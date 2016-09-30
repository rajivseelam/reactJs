export default function reducer(state={
    nowPlayingMovies: [],
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
              nowPlayingMovies: action.payload
          }
          break;
      }
    }
    return state;
}
