import axios from 'axios'
import * as tvshowDetailedPageActions from 'actions/tv/tv-show-detailed-page-actions'

export function fetchTvShowDetails(id) {
    return function(dispatch){
        axios.get("https://api.themoviedb.org/3/tv/" + id + "?api_key=d272326e467344029e68e3c4ff0b4059")
        .then((response) => {
            dispatch({type: "FETCH_TV_SHOW_DETAILS_FULFILLED", payload: response.data })
        })
        .catch((err) => {
            dispatch({type: "FETCH_TV_SHOW_DETAILS_REJECTED", payload: err})
        })
    }
}

//Get Credits
export function fetchTvShowCredits(id) {
    return function(dispatch){
        axios.get("https://api.themoviedb.org/3/tv/" + id + "/credits?api_key=d272326e467344029e68e3c4ff0b4059")
        .then((response) => {
            dispatch({type: "FETCH_TV_SHOW_CREDITS_FULFILLED", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "FETCH_TV_SHOW_CREDITS_REJECTED", payload: err})
        })
    }
}

//Get Reviews
export function fetchTvShowReviews(id) {
    return function(dispatch){
        axios.get("https://api.themoviedb.org/3/tv/" + id + "/reviews?api_key=d272326e467344029e68e3c4ff0b4059")
        .then((response) => {
            dispatch({type: "FETCH_TV_SHOW_REVIEWS_FULFILLED", payload: { results: response.data.results, count: response.data.total_results} })
        })
        .catch((err) => {
            dispatch({type: "FETCH_TV_SHOW_REVIEWS_REJECTED", payload: err})
        })
    }
}

//Get Recommendations
export function fetchTvShowRecommendations(id) {
    return function(dispatch){
        axios.get("https://api.themoviedb.org/3/tv/" + id + "/recommendations?api_key=d272326e467344029e68e3c4ff0b4059")
        .then((response) => {
            dispatch({type: "FETCH_TV_SHOW_RECOMMENDATIONS_FULFILLED", payload: { results: response.data.results, count: response.data.total_results} })
        })
        .catch((err) => {
            dispatch({type: "FETCH_TV_SHOW_RECOMMENDATIONS_REJECTED", payload: err})
        })
    }
}

export function clearTvShowDetails() {
    return function(dispatch){
        dispatch({type: "CLEAR_FETCH_ALL_TV_SHOW_DETAILS"})
    }
}
