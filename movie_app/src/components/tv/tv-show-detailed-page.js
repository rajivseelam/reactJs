import React, { Component } from 'react'
import render from 'react-dom'
import { connect } from 'react-redux'
import { clearTvShowDetails, fetchTvShowDetails, fetchTvShowCredits, fetchTvShowReviews, fetchTvShowRecommendations } from '../../actions/tv/tv-show-detailed-page-actions'
import TvShowInfoContainer  from '../utils/common/item-info-container'



@connect((store) => {
    return{
      itemDetails: store.tvShowDetailedPageReducer.tvShowDetails,
      itemCredits: store.tvShowDetailedPageReducer.tvShowCredits,
      itemReviews: store.tvShowDetailedPageReducer.tvShowReviews,
      itemRecommendations: store.tvShowDetailedPageReducer.tvShowRecommendations,
      tvShowDetailsFetched: store.tvShowDetailedPageReducer.tvShowDetailsFetched,
      tvShowCreditsFetched: store.tvShowDetailedPageReducer.tvShowCreditsFetched,
      tvShowReviewsFetched: store.tvShowDetailedPageReducer.tvShowReviewsFetched,
      tvShowRecommendationsFetched: store.tvShowDetailedPageReducer.tvShowRecommendationsFetched,
    }
})
export default class TvShowDetailedPage extends Component{
    componentWillMount(){
        let id = this.props.params.id
        this.props.dispatch(clearTvShowDetails());
        this.props.dispatch(fetchTvShowDetails(id));
        this.props.dispatch(fetchTvShowCredits(id));
        this.props.dispatch(fetchTvShowRecommendations(id));
    }

    render(){
        var tvShowInfo = [];
        if(this.props.itemDetails){
            tvShowInfo = <TvShowInfoContainer {...this.props} />
        }

        return(
            <div className="container">
              <h1>Tv Show Detailed Page </h1>
                {tvShowInfo}
            </div>
        )
    }
}
