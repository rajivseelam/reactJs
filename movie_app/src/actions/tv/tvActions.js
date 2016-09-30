import axios from 'axios'
import * as tvActions from 'actions/tv/tvActions'

export function fetchNowPlayingTvShows() {
    return function(dispatch){
        axios.get("https://api.themoviedb.org/3/tv/on_the_air?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US")
        .then((response) => {
            dispatch({type: "FETCH_NOW_PLAYING_TV_SHOWS_FULFILLED", payload: { results: response.data.results, count: response.data.total_results} })
        })
        .catch((err) => {
            dispatch({type: "FETCH_NOW_PLAYING_TV_SHOWS_REJECTED", payload: err})
        })
    }
}

export function clearNowPlayingTvShows() {
    return function(dispatch){
        dispatch({type: "CLEAR_NOW_PLAYING_TV_SHOWS"})
    }
}
