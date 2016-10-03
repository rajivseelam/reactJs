import axios from 'axios'
import * as mostPopularMoviesActions from 'actions/movies/most-popular-movies-actions'

export function fetchMostPopularMovies() {
    return function(dispatch){
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=d272326e467344029e68e3c4ff0b4059")
        .then((response) => {
            dispatch({type: "FETCH_MOST_POPULAR_MOVIES_FULFILLED", payload: { results: response.data.results, count: response.data.total_results} })
        })
        .catch((err) => {
            dispatch({type: "FETCH_MOST_POPULAR_MOVIES_REJECTED", payload: err})
        })
    }
}

export function clearMostPopularMovies() {
    return function(dispatch){
        dispatch({type: "CLEAR_FETCH_MOST_POPULAR_MOVIES"})
    }
}
