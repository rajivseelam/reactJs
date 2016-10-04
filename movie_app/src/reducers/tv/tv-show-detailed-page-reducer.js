export default function reducer(state={
    tvShowDetails: null,
    tvShowCredits: null,
    tvShowReviews: [],
    tvShowRecommendations: [],
    fetching: false,
    tvShowDetailsFetched: false,
    tvShowCreditsFetched: false,
    tvShowReviewsFetched: false,
    tvShowRecommendationsFetched: false,
    error: false
}, action) {
    switch (action.type) {
      case "CLEAR_FETCH_ALL_TV_SHOW_DETAILS": {
          return {
              ...state,
              tvShowDetails: null,
              tvShowCredits: null,
              tvShowReviews: [],
              tvShowRecommendations: [],
              tvShowDetailsFetched: false,
              tvShowCreditsFetched: false,
              tvShowReviewsFetched: false,
              tvShowRecommendationsFetched: false,
              fetching: true
          }
          break;
      }
      case "FETCH_TV_SHOW_DETAILS_REJECTED": {
          return {
              ...state,
              fetching: false,
              tvShowDetailsFetched: false,
              tvShowDetails: null,
              tvShowCredits: null,
              tvShowReviews: [],
              tvShowRecommendations: [],
              error: action.payload
          }
          break;
      }
      case "FETCH_TV_SHOW_DETAILS_FULFILLED": {
          return {
              ...state,
              fetching: false,
              tvShowDetailsFetched: true,
              tvShowDetails: action.payload
          }
          break;
      }
      case "FETCH_TV_SHOW_CREDITS_REJECTED": {
          return {
              ...state,
              fetching: false,
              tvShowDetailsFetched: false,
              tvShowDetails: null,
              tvShowCredits: null,
              tvShowReviews: [],
              tvShowRecommendations: [],
              error: action.payload
          }
          break;
      }
      case "FETCH_TV_SHOW_CREDITS_FULFILLED": {
          return {
              ...state,
              fetching: false,
              tvShowCreditsFetched: true,
              tvShowCredits: action.payload
          }
          break;
      }
      case "FETCH_TV_SHOW_REVIEWS_REJECTED": {
          return {
              ...state,
              fetching: false,
              tvShowDetailsFetched: false,
              tvShowDetails: null,
              tvShowCredits: null,
              tvShowReviews: [],
              tvShowRecommendations: [],
              error: action.payload
          }
          break;
      }
      case "FETCH_TV_SHOW_REVIEWS_FULFILLED": {
          return {
              ...state,
              fetching: false,
              tvShowReviewsFetched: true,
              tvShowReviews: action.payload.results
          }
          break;
      }
      case "FETCH_TV_SHOW_RECOMMENDATIONS_REJECTED": {
          return {
              ...state,
              fetching: false,
              tvShowDetailsFetched: false,
              tvShowDetails: null,
              tvShowCredits: null,
              tvShowReviews: [],
              tvShowRecommendations: [],
              error: action.payload
          }
          break;
      }
      case "FETCH_TV_SHOW_RECOMMENDATIONS_FULFILLED": {
          return {
              ...state,
              fetching: false,
              tvShowRecommendationsFetched: true,
              tvShowRecommendations: action.payload.results
          }
          break;
      }
    }
    return state;
}
