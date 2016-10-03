import React, { Component } from 'react'
import render from 'react-dom'
import '../../../stylesheets/common/main'

export default class MovieInfo extends Component{
    render(){
        var movieElement = null;
        var crewElement = null;
        var castElement = [];
        if(this.props.movieCredits){
          crewElement = this.props.movieCredits.crew.map( (crew) => {
              return <div key={crew.id} className={ "col-md-4 crew-tile " + (crew.job && crew.job.toLowerCase() == "novel" || crew.job.toLowerCase() == "screenplay" || crew.job.toLowerCase() == "director" ? '': 'inactive') } >
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
        }

        if(this.props.movieCredits){
          castElement = this.props.movieCredits.cast.map( (cast, index) => {
              if(index >= 6){
                return false
              }
              return <div key={cast.id} className="col-xs-6 col-sm-2 placeholder">
                <img src={ cast.profile_path ? "https://image.tmdb.org/t/p/w132_and_h132_bestv2/" + cast.profile_path : require('../../../images/no-poster.png')} width="200" height="200" className="img-responsive cast-img" alt="Generic placeholder thumbnail"/>
                <h4>{cast.name}</h4>
                <span className="text-muted">{cast.character}</span>
              </div>
          })
        }

        return(
            <div className="row">
              <div className="container-fluid">
                  {movieElement}
              </div>

              <div className="container-fluid">
                  <h3>Top Billed Cast</h3>
                  <br/>
                  <div className="row placeholders">
                    {castElement}
                  </div>
              </div>
            </div>
         )
    }
}
