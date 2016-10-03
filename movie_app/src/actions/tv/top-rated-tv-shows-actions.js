import axios from 'axios'
import * as topRatedTvshowsActions from 'actions/tv/top-rated-tv-shows-actions'

export function fetchTopRatedTvShows() {
    return function(dispatch){
        axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US")
        .then((response) => {
            dispatch({type: "FETCH_TOP_RATED_TV_SHOWS_FULFILLED", payload: { results: response.data.results, count: response.data.total_results} })
        })
        .catch((err) => {
            dispatch({type: "FETCH_TOP_RATED_TV_SHOWS_REJECTED", payload: err})
        })
    }
}

export function clearTopRatedTvShows() {
    return function(dispatch){
        dispatch({type: "CLEAR_TOP_RATED_TV_SHOWS"})
    }
}
