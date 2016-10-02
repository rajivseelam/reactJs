export default function reducer(state={
    tvShowsCount: 0,
    nowPlayingtvShows: [],
    fetching: false,
    fetched: false,
    error: false
}, action) {
    switch (action.type) {
      case "CLEAR_NOW_PLAYING_TV_SHOWS": {
          return {
              ...state,
              nowPlayingtvShows: [],
              fetched: false,
              fetching: true
          }
          break;
      }
      case "FETCH_NOW_PLAYING_TV_SHOWS_REJECTED": {
          return {
              ...state,
              fetching: false,
              fetched: false,
              nowPlayingtvShows: [],
              error: action.payload
          }
          break;
      }
      case "FETCH_NOW_PLAYING_TV_SHOWS_FULFILLED": {
          return {
              ...state,
              fetching: false,
              fetched: true,
              tvShowsCount: action.payload.count,
              nowPlayingtvShows: action.payload.results
          }
          break;
      }
    }
    return state;
}
