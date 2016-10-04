import React, { Component } from 'react'
import render from 'react-dom'
import '../../../stylesheets/common/main'

export default class MovieInfo extends Component{
    render(){
        let movieElement = null;
        let crewElement = null;
        let castElement = [];
        let movieData = [];
        let reviewElement = [];
        let recommendationsElement = [];

        if(this.props.movieCredits){
          crewElement = this.props.movieCredits.crew.map( (crew) => {
              return <div key={crew.job + crew.id} className={ "col-md-4 crew-tile " + (crew.job && crew.job.toLowerCase() == "novel" || crew.job.toLowerCase() == "screenplay" || crew.job.toLowerCase() == "director" ? '': 'inactive') } >
                  <h4> <b>{ crew.name } </b></h4>
                  <h5>{ crew.job ? crew.job: '' }</h5>
               </div>
          })
        }

        if(this.props.movieDetails){
            let item = this.props.movieDetails;
            movieElement = <div className="row">
                <div className="col-md-4 main">
                <img src={(item.poster_path ? "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + item.poster_path: (item.backdrop_path? "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + item.backdrop_path : require('../../../images/no-poster.png')) )} width="100%" height="100%" className="img-responsive" alt="Generic placeholder thumbnail" />
                </div>
                <div className="col-md-8 main">
                    <div className='container-fluid'>
                      <h3>
                          <span>{ item.title? item.title: ''}</span>
                          <span className="grey-text"> { item.release_date ? '(' + item.release_date + ')': '' } </span>
                      </h3>
                      <h2><span className="grey-text"> { item.vote_average ? item.vote_average: '' } </span></h2>
                      <h3>Overview</h3>
                      <p> { item.overview ? item.overview : ''}</p>
                    </div>
                    <div className='container-fluid'>
                      <h3>Fetured Crew</h3>
                      {crewElement}
                    </div>
                </div>
            </div>
            movieData = <div className="container-fluid">
                <div className="col-md-3 crew-tile">
                  <h4> <b>Status</b></h4>
                  <h5>{ item.status ? item.status : '' }</h5>
                </div>
                <div className="col-md-3 crew-tile">
                  <h4> <b>Original Language</b></h4>
                  <h5>{ item.original_language ? item.original_language : '' }</h5>
                </div>
                <div  className="col-md-3 crew-tile">
                  <h4> <b>Run Time</b></h4>
                  <h5>{ item.runtime ? parseFloat(item.runtime/60).toFixed(2) : '' }</h5>
                </div>
                <div className="col-md-3 crew-tile">
                  <h4> <b>Budget</b></h4>
                  <h5>{ item.budget ? item.budget : '-' }</h5>
                </div>
                <div className="col-md-3 crew-tile">
                  <h4> <b>Revenue</b></h4>
                  <h5>{ item.revenue ? item.revenue : '-' }</h5>
                </div>
                <div className="col-md-3 crew-tile">
                  <h4> <b>Home Page</b></h4>
                  <h5><a target='_blank' href={item.homepage ? item.homepage : "#"}> { item.homepage ? item.homepage : '-' }</a></h5>
                </div>
             </div>
        }

        if(this.props.movieCredits){
          castElement = this.props.movieCredits.cast.map( (cast, index) => {
              if(index >= 6){
                return false
              }
              return <div key={"cast_" + cast.id} className="col-xs-6 col-sm-2 placeholder">
                <img src={ cast.profile_path ? "https://image.tmdb.org/t/p/w132_and_h132_bestv2/" + cast.profile_path : require('../../../images/no-poster.png')} width="200" height="200" className="img-responsive cast-img" alt="Generic placeholder thumbnail"/>
                <h4>{cast.name}</h4>
                <span className="text-muted">{cast.character}</span>
              </div>
          })
        }

        if(this.props.movieReviews.length){
            reviewElement = this.props.movieReviews.map((review, index) => {
                if(index > 1){
                  return false;
                }
                return <div key={"review_" + review.id} className="container-fluid">
                    <h2> A review by {review.author ? review.author: ''} </h2>
                    <h4> by {review.author ? review.author: ''} </h4>
                    <p> {review.content ? review.content : ''}</p>
                </div>
            })
        }
        if(this.props.movieRecommendations.length){
          recommendationsElement =  this.props.movieRecommendations.map((recommendation) => {
            var item = recommendation;

            return <li key={ "recommendations_" + item.id} className="movie_tile DocumentItem">
                    <img src={(item.poster_path ? "https://image.tmdb.org/t/p/w250_and_h141_bestv2" + item.poster_path: (item.backdrop_path? "https://image.tmdb.org/t/p/w250_and_h141_bestv2" + item.backdrop_path : require('../../../images/no-poster.png')) )} width="100%" height="100%" className="img-responsive" alt="Generic placeholder thumbnail" />
                    <div className="row">
                      <h4>{item.title ? item.title.substr(0, 25): item.name.substr(0, 25)}</h4>
                      <span className="pull-left text-muted"> {item.popularity ? item.popularity: ''} </span>
                      <span className="pull-right text-muted"> {item.vote_average ? item.vote_average + "%": '0%' } </span>
                    </div>
                </li>
           })
        }

        return(
            <div className="row">
              <div className="container-fluid">
                  {movieElement}
              </div>
              <hr/>
              <div className="container-fluid">
                  <h3>Top Billed Cast</h3>
                  <br/>
                  <div className="row placeholders">
                    {castElement}
                  </div>
              </div>
              <hr/>
              <div className="container-fluid">
                  <h3>Movie Data</h3>
                  <br/>
                  <div>
                      <h3>Facts</h3>
                      {movieData}
                  </div>
              </div>
              <hr/>

              <div className="container-fluid">
                  <h3>Reviews</h3>
                  <br/>
                  <div>
                      <h3>Featured Review</h3>
                      {reviewElement}
                  </div>
              </div>
              <hr/>

              <div className="container-fluid">
                  <h3>Recommendations</h3>
                  <br/>
                  <ul className="recommendations-container list-inline">
                  {recommendationsElement}
                  </ul>
              </div>
              <hr/>

            </div>
         )
    }
}
