import axios from 'axios'
import * as celebsDetailActions from 'actions/celebs/celebs-detailed-actions';

export function fetchCelebsDetails(id) {
    return function(dispatch){
        axios.get("https://api.themoviedb.org/3/person/" + id + "?api_key=d272326e467344029e68e3c4ff0b4059")
        .then((response) => {
            dispatch({type: "FETCH_CELEBS_DETAILS_FULFILLED", payload: response.data })
        })
        .catch((err) => {
            dispatch({type: "FETCH_CELEBS_DETAILS_REJECTED", payload: err})
        })
    }
}

export function clearAllCelebsDetails() {
    return function(dispatch){
        dispatch({type: "CLEAR_CELEBS_DETAILS_LIST"})
    }
}
