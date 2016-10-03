import axios from 'axios'
import * as airingTodayTvshowsActions from 'actions/tv/airing-today-tv-shows-actions'

export function fetchAiringTodayTvShows() {
    return function(dispatch){
        axios.get("https://api.themoviedb.org/3/tv/airing_today?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US")
        .then((response) => {
            dispatch({type: "FETCH_AIRING_TODAY_TV_SHOWS_FULFILLED", payload: { results: response.data.results, count: response.data.total_results} })
        })
        .catch((err) => {
            dispatch({type: "FETCH_AIRING_TODAY_TV_SHOWS_REJECTED", payload: err})
        })
    }
}

export function clearAiringTodayTvShows() {
    return function(dispatch){
        dispatch({type: "CLEAR_AIRING_TODAY_TV_SHOWS"})
    }
}
