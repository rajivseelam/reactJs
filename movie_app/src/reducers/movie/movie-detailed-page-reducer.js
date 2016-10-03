export default function reducer(state={
    movieDetails: null,
    movieCredits: null,
    movieReviews: [],
    movieRecommendations: [],
    fetching: false,
    movieDetailsFetched: false,
    movieCreditsFetched: false,
    movieReviewsFetched: false,
    movieRecommendationsFetched: false,
    error: false
}, action) {
    switch (action.type) {
      case "CLEAR_FETCH_ALL_MOVIE_DETAILS": {
          return {
              ...state,
              movieDetails: null,
              movieCredits: null,
              movieReviews: [],
              movieRecommendations: [],
              movieDetailsFetched: false,
              movieCreditsFetched: false,
              movieReviewsFetched: false,
              movieRecommendationsFetched: false,
              fetching: true
          }
          break;
      }
      case "FETCH_MOVIE_DETAILS_REJECTED": {
          return {
              ...state,
              fetching: false,
              movieDetailsFetched: false,
              movieDetails: null,
              movieCredits: null,
              movieReviews: [],
              movieRecommendations: [],
              error: action.payload
          }
          break;
      }
      case "FETCH_MOVIE_DETAILS_FULFILLED": {
          return {
              ...state,
              fetching: false,
              movieDetailsFetched: true,
              movieDetails: action.payload
          }
          break;
      }
      case "FETCH_MOVIE_CREDITS_REJECTED": {
          return {
              ...state,
              fetching: false,
              movieDetailsFetched: false,
              movieDetails: null,
              movieCredits: null,
              movieReviews: [],
              movieRecommendations: [],
              error: action.payload
          }
          break;
      }
      case "FETCH_MOVIE_CREDITS_FULFILLED": {
          return {
              ...state,
              fetching: false,
              movieCreditsFetched: true,
              movieCredits: action.payload
          }
          break;
      }
      case "FETCH_MOVIE_REVIEWS_REJECTED": {
          return {
              ...state,
              fetching: false,
              movieDetailsFetched: false,
              movieDetails: null,
              movieCredits: null,
              movieReviews: [],
              movieRecommendations: [],
              error: action.payload
          }
          break;
      }
      case "FETCH_MOVIE_REVIEWS_FULFILLED": {
          return {
              ...state,
              fetching: false,
              movieReviewsFetched: true,
              movieReviews: action.payload.results
          }
          break;
      }
      case "FETCH_MOVIE_RECOMMENDATIONS_REJECTED": {
          return {
              ...state,
              fetching: false,
              movieDetailsFetched: false,
              movieDetails: null,
              movieCredits: null,
              movieReviews: [],
              movieRecommendations: [],
              error: action.payload
          }
          break;
      }
      case "FETCH_MOVIE_RECOMMENDATIONS_FULFILLED": {
          return {
              ...state,
              fetching: false,
              movieRecommendationsFetched: true,
              movieRecommendations: action.payload.results
          }
          break;
      }
    }
    return state;
}
