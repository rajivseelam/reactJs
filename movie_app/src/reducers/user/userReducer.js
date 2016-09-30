export default function reducer(state={
    userList: [],
    usersCount: 0,
    fetching: false,
    fetched: false,
    error: false
}, action) {
    switch (action.type) {
      case "CLEAR_USER_LIST": {
          return {
              ...state,
              userList: [],
              fetched: false,
              fetching: true
          }
          break;
      }
      case "FETCH_USER_REJECTED": {
          return {
              ...state,
              userList: [],
              fetched: false,
              fetching: false,
              error: action.payload
          }
          break;
      }
      case "FETCH_USER_FULFILLED": {
          return {
              ...state,
              fetching: false,
              fetched: true,
              usersCount: action.payload.count,
              userList: action.payload.results
          }
          break;
      }
    }
    return state;
}
