export default function reducer(state={
    celebDetails: null,
    fetching: false,
    celebDetailsfetched: false,
    error: false
}, action) {
    switch (action.type) {
      case "CLEAR_CELEBS_DETAILS_LIST": {
          return {
              ...state,
              celebDetails: null,
              celebDetailsfetched: false,
              fetching: true
          }
          break;
      }
      case "FETCH_CELEBS_DETAILS_REJECTED": {
          return {
              ...state,
              celebDetails: null,
              celebDetailsfetched: false,
              fetching: false,
              error: action.payload
          }
          break;
      }
      case "FETCH_CELEBS_DETAILS_FULFILLED": {
          return {
              ...state,
              fetching: false,
              celebDetailsfetched: true,
              celebDetails: action.payload
          }
          break;
      }
    }
    return state;
}
