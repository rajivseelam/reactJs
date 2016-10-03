import axios from 'axios'
import * as UpcomingMoviesActions from 'actions/movies/upcoming-movies-actions'

export function fetchUpcomingMovies() {
    return function(dispatch){
        axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=d272326e467344029e68e3c4ff0b4059")
        .then((response) => {
            dispatch({type: "FETCH_UPCOMING_MOVIES_FULFILLED", payload: { results: response.data.results, dates: response.data.dates, count: response.data.total_results} })
        })
        .catch((err) => {
            dispatch({type: "FETCH_UPCOMING_MOVIES_REJECTED", payload: err})
        })
    }
}

export function clearUpcomingMovies() {
    return function(dispatch){
        dispatch({type: "CLEAR_FETCH_UPCOMING_MOVIES"})
    }
}
