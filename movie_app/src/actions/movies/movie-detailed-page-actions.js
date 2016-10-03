import axios from 'axios'
import * as movieDetailedPageActions from 'actions/movies/movie-detailed-page-actions'

export function fetchMovieDetails(id) {
    return function(dispatch){
        axios.get("https://api.themoviedb.org/3/movie/" + id + "?api_key=d272326e467344029e68e3c4ff0b4059")
        .then((response) => {
            dispatch({type: "FETCH_MOVIE_DETAILS_FULFILLED", payload: response.data })
        })
        .catch((err) => {
            dispatch({type: "FETCH_MOVIE_DETAILS_REJECTED", payload: err})
        })
    }
}

//Get Credits
export function fetchMovieCredits(id) {
    return function(dispatch){
        axios.get("https://api.themoviedb.org/3/movie/" + id + "/credits?api_key=d272326e467344029e68e3c4ff0b4059")
        .then((response) => {
            dispatch({type: "FETCH_MOVIE_CREDITS_FULFILLED", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "FETCH_MOVIE_CREDITS_REJECTED", payload: err})
        })
    }
}

//Get Reviews
export function fetchMovieReviews(id) {
    return function(dispatch){
        axios.get("https://api.themoviedb.org/3/movie/" + id + "/reviews?api_key=d272326e467344029e68e3c4ff0b4059")
        .then((response) => {
            dispatch({type: "FETCH_MOVIE_REVIEWS_FULFILLED", payload: { results: response.data.results, count: response.data.total_results} })
        })
        .catch((err) => {
            dispatch({type: "FETCH_MOVIE_REVIEWS_REJECTED", payload: err})
        })
    }
}

//Get Recommendations
export function fetchMovieRecommendations(id) {
    return function(dispatch){
        axios.get("https://api.themoviedb.org/3/movie/" + id + "/recommendations?api_key=d272326e467344029e68e3c4ff0b4059")
        .then((response) => {
            dispatch({type: "FETCH_MOVIE_RECOMMENDATIONS_FULFILLED", payload: { results: response.data.results, count: response.data.total_results} })
        })
        .catch((err) => {
            dispatch({type: "FETCH_MOVIE_RECOMMENDATIONS_REJECTED", payload: err})
        })
    }
}

export function clearMovieDetails() {
    return function(dispatch){
        dispatch({type: "CLEAR_FETCH_ALL_MOVIE_DETAILS"})
    }
}
