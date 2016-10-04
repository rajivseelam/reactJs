import React, { Component } from 'react'
import render from 'react-dom'
import { connect } from 'react-redux'
import { clearMovieDetails, fetchMovieDetails, fetchMovieCredits, fetchMovieReviews, fetchMovieRecommendations } from '../../actions/movies/movie-detailed-page-actions'
import MovieInfoContainer  from '../utils/common/item-info-container'



@connect((store) => {
    return{
      itemDetails: store.movieDetailedPageReducer.movieDetails,
      itemCredits: store.movieDetailedPageReducer.movieCredits,
      itemReviews: store.movieDetailedPageReducer.movieReviews,
      itemRecommendations: store.movieDetailedPageReducer.movieRecommendations,
      movieDetailsFetched: store.movieDetailedPageReducer.movieDetailsFetched,
      movieCreditsFetched: store.movieDetailedPageReducer.movieCreditsFetched,
      movieReviewsFetched: store.movieDetailedPageReducer.movieReviewsFetched,
      movieRecommendationsFetched: store.movieDetailedPageReducer.movieRecommendationsFetched,
    }
})
export default class MovieDetailedPage extends Component{
    componentWillMount(){
        let userId = this.props.params.id
        this.props.dispatch(clearMovieDetails());
        this.props.dispatch(fetchMovieDetails(userId));
        this.props.dispatch(fetchMovieCredits(userId));
        this.props.dispatch(fetchMovieReviews(userId));
        this.props.dispatch(fetchMovieRecommendations(userId));
    }

    render(){
        var movieInfo = [];
        if(this.props.itemDetails){
            movieInfo = <MovieInfoContainer {...this.props} />
        }

        return(
            <div className="container">
              <h1>Movie Detailed Page </h1>
                {movieInfo}
            </div>
        )
    }
}
