import axios from 'axios'
import * as searchActions from 'actions/search/searchActions'

export function fetchSearchItems(searchKeyword) {
    return function(dispatch){
        axios.get("https://api.themoviedb.org/3/search/multi?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query=" + searchKeyword)
        .then((response) => {
            dispatch({type: "FETCH_SEARCH_ITEMS_FULFILLED", payload: response.data.results})
        })
        .catch((err) => {
            dispatch({type: "FETCH_SEARCH_ITEMS_REJECTED", payload: err})
        })
    }
}

export function startFetchingSearchItems() {
    return function(dispatch){
        dispatch({type: "FETCH_SEARCH_ITEMS"})
    }
}
