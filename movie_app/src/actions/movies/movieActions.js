import axios from 'axios'
import * as movieActions from 'actions/movies/movieActions'

export function fetchNowPlayingMovies() {
    return function(dispatch){
        axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=d272326e467344029e68e3c4ff0b4059")
        .then((response) => {
            dispatch({type: "FETCH_NOW_PLAYING_MOVIES_FULFILLED", payload: { results: response.data.results, count: response.data.total_results} })
        })
        .catch((err) => {
            dispatch({type: "FETCH_NOW_PLAYING_MOVIES_REJECTED", payload: err})
        })
    }
}

export function clearNowPlayingMovies() {
    return function(dispatch){
        dispatch({type: "CLEAR_NOW_PLAYING_MOVIES"})
    }
}
