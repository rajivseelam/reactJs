import axios from 'axios'
import * as mostPopularCelebActions from 'actions/celebs/most-popular-celeb-actions';

export function fetchMostPopularCelebs() {
    return function(dispatch){
        axios.get("https://api.themoviedb.org/3/person/popular?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US")
        .then((response) => {
            dispatch({type: "FETCH_USER_FULFILLED", payload: { results: response.data.results, count: response.data.total_results } })
        })
        .catch((err) => {
            dispatch({type: "FETCH_USER_REJECTED", payload: err})
        })
    }
}

export function clearMostPopularCelebs() {
    return function(dispatch){
        dispatch({type: "CLEAR_USER_LIST"})
    }
}
