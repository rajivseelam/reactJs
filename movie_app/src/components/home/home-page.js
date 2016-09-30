import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import '../../stylesheets/home/home'
import { fetchNowPlayingMovies, clearNowPlayingMovies } from '../../actions/movies/movieActions'

@connect( (store) => {
    return{
      nowPlayingMovies: store.movieReducer.nowPlayingMovies,
      fetched: store.movieReducer.fetched
    }
})
export default class HomePage extends Component {
    componentWillMount(){
        this.props.dispatch(clearNowPlayingMovies())
        this.props.dispatch(fetchNowPlayingMovies())
    }

    render(){
        var movieListElement = [];
        if(this.props.nowPlayingMovies.length > 0){
            movieListElement = this.props.nowPlayingMovies.map( (movie, index) => {
                  if(index >= 8){
                    return false
                  }
                  return <a href="#" key={index} className={ (!index ? 'active' : '') }>
                      <div className="movie_tile col-xs-6 col-sm-3 placeholder">
                          <img src={"https://image.tmdb.org/t/p/w250_and_h141_bestv2/" + (movie.backdrop_path)} width="100%" height="100%" className="img-responsive" alt="Generic placeholder thumbnail" />
                          <div className="row">
                            <h4>{movie.title ? movie.title.substr(0, 25): ''}</h4>
                            <span className="pull-left text-muted"> {movie.popularity ? movie.popularity: ''} </span>
                            <span className="pull-right text-muted"> {movie.vote_average ? movie.vote_average + "%": '0%' } </span>
                          </div>

                      </div>
                  </a>
            });
        }

        return(
            <div className='container-home'>
                <h2 className="page-header">In Theatre</h2>
                <div className={"row placeholders" +  (this.props.fetched ? '': 'inactive')}>
                     {movieListElement}
                </div>
                <hr/>
                <h2 className="page-header">On TV</h2>
                <div className={"row placeholders" +  (this.props.fetched ? '': 'inactive')}>
                     {movieListElement}
                </div>
            </div>
        )
    }
}
