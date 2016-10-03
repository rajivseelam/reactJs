import axios from 'axios'
import * as mostPopularTvshowsActions from 'actions/tv/most-popular-tv-shows-actions'

export function fetchMostPopularTvShows() {
    return function(dispatch){
        axios.get("https://api.themoviedb.org/3/tv/popular?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US")
        .then((response) => {
            dispatch({type: "FETCH_MOST_POPULAR_TV_SHOWS_FULFILLED", payload: { results: response.data.results, count: response.data.total_results} })
        })
        .catch((err) => {
            dispatch({type: "FETCH_MOST_POPULAR_TV_SHOWS_REJECTED", payload: err})
        })
    }
}

export function clearMostPopularTvShows() {
    return function(dispatch){
        dispatch({type: "CLEAR_MOST_POPULAR_TV_SHOWS"})
    }
}
