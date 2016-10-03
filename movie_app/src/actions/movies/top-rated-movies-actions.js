import axios from 'axios'
import * as topRatedMoviesActions from 'actions/movies/top-rated-movies-actions'

export function fetchTopRatedMovies() {
    return function(dispatch){
        axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=d272326e467344029e68e3c4ff0b4059")
        .then((response) => {
            dispatch({type: "FETCH_TOP_RATED_MOVIES_FULFILLED", payload: { results: response.data.results, count: response.data.total_results} })
        })
        .catch((err) => {
            dispatch({type: "FETCH_TOP_RATED_MOVIES_REJECTED", payload: err})
        })
    }
}

export function clearTopRatedMovies() {
    return function(dispatch){
        dispatch({type: "CLEAR_FETCH_UPCOMING_MOVIES"})
    }
}
