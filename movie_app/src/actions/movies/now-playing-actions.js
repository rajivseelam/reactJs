import axios from 'axios'
import * as NowPlayingActions from 'actions/movies/now-playing-actions'

export function fetchNowPlayingMovies() {
    return function(dispatch){
        axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=d272326e467344029e68e3c4ff0b4059")
        .then((response) => {
            dispatch({type: "FETCH_NOW_PLAYING_MOVIES_FULFILLED", payload: { results: response.data.results, dates: response.data.dates, count: response.data.total_results} })
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
