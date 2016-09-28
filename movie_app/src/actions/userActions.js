import axios from 'axios'
import * as user from '../actions/userActions';

export function fetchUsers() {
    return function(dispatch){
        axios.get("http://rest.learncode.academy/api/wstern/users")
        .then((response) => {
            dispatch({type: "FETCH_USER_FULFILLED", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "FETCH_USER_REJECTED", payload: err})
        })
    }
}
