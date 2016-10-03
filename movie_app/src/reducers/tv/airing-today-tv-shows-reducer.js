export default function reducer(state={
    tvShowsCount: 0,
    airingTodayTvShows: [],
    fetching: false,
    fetched: false,
    error: false
}, action) {
    switch (action.type) {
      case "CLEAR_AIRING_TODAY_TV_SHOWS": {
          return {
              ...state,
              airingTodayTvShows: [],
              fetched: false,
              fetching: true
          }
          break;
      }
      case "FETCH_AIRING_TODAY_TV_SHOWS_REJECTED": {
          return {
              ...state,
              fetching: false,
              fetched: false,
              airingTodayTvShows: [],
              error: action.payload
          }
          break;
      }
      case "FETCH_AIRING_TODAY_TV_SHOWS_FULFILLED": {
          return {
              ...state,
              fetching: false,
              fetched: true,
              tvShowsCount: action.payload.count,
              airingTodayTvShows: action.payload.results
          }
          break;
      }
    }
    return state;
}
