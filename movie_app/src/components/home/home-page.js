import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import '../../stylesheets/home/home'
import { fetchNowPlayingMovies, clearNowPlayingMovies } from '../../actions/movies/now-playing-actions'
import { fetchNowPlayingTvShows, clearNowPlayingTvShows } from '../../actions/tv/tv-shows-on-tv-actions'
import { fetchMostPopularCelebs, clearMostPopularCelebs } from '../../actions/celebs/most-popular-celeb-actions'
import ItemListContainer  from '../utils/item-list-container'

@connect( (store) => {
    return{
      nowPlayingMovies: store.nowPlayingReducer.nowPlayingMovies,
      moviesFetched: store.nowPlayingReducer.fetched,
      moviesCount: store.nowPlayingReducer.moviesCount,
      nowPlayingTvShows: store.tvShowsOnTvReducer.nowPlayingtvShows,
      tvShowsFetched: store.tvShowsOnTvReducer.fetched,
      tvShowsCount: store.tvShowsOnTvReducer.tvShowsCount,
      usersCount: store.mostPopularCelebsReducer.usersCount,
      userList: store.mostPopularCelebsReducer.userList,
      peopleFetched: store.mostPopularCelebsReducer.fetched
    }
})
export default class HomePage extends Component {
    componentWillMount(){
        this.props.dispatch(clearNowPlayingMovies())
        this.props.dispatch(fetchNowPlayingMovies())
        this.props.dispatch(clearNowPlayingTvShows())
        this.props.dispatch(fetchNowPlayingTvShows())
        this.props.dispatch(clearMostPopularCelebs())
        this.props.dispatch(fetchMostPopularCelebs())
    }

    render(){
        var movieListElement = [];
        if(this.props.nowPlayingMovies.length > 0){
            movieListElement = <ItemListContainer mediaType='movie' items={this.props.nowPlayingMovies} />
        }
        var tvShowsListElement = [];
        if(this.props.nowPlayingTvShows.length > 0){
            tvShowsListElement = <ItemListContainer mediaType="tv" items={this.props.nowPlayingTvShows} />
        }

        var usersListElement = [];
        if(this.props.userList.length > 0){
          usersListElement = this.props.userList.map( (user, index) => {
                if(index >= 8){
                  return false
                }
                return <a href={"/home/celebs/" + user.id}  key={index} className={ (!index ? 'active' : '') }>
                    <div className="movie_tile col-xs-6 col-sm-3 placeholder">
                        <img src={"https://image.tmdb.org/t/p/w235_and_h235_bestv2" + (user.profile_path)} width="100%" height="100%" className="img-responsive" alt="Generic placeholder thumbnail" />
                        <div className="row">
                          <h4>{user.name ? user.name.substr(0, 25): ''}</h4>
                          <span className="pull-left text-muted"> {user.popularity ? user.popularity: ''} </span>
                          <span className="pull-right text-muted"> {user.known_for[0].vote_average ? user.known_for[0].vote_average + "%": '0%' } </span>
                        </div>
                    </div>
                </a>
          });
        }

        return(
            <div className='container-home'>
                <h2 className="page-header">Dashboard</h2>
                <div className="container placeholders">
                    <div className="over-all-count col-xs-6 col-sm-3 placeholder">
                        <div className="row">
                          <h4>Total No.of Latest Movies</h4>
                          <h4 className="text-muted"> {this.props.moviesCount} </h4>
                         </div>
                    </div>
                    <div className="over-all-count col-xs-6 col-sm-3 placeholder">
                        <div className="row">
                          <h4>Total No.of Latest TV Shows</h4>
                          <h4 className="text-muted"> {this.props.tvShowsCount} </h4>
                         </div>
                    </div>
                    <div className="over-all-count col-xs-6 col-sm-3 placeholder">
                        <div className="row">
                          <h4>Total No.of Popular Users</h4>
                          <h4 className="text-muted"> {this.props.usersCount} </h4>
                         </div>
                    </div>
                </div>
                <hr/>

                <h2 className="page-header">In Theatre</h2>
                <div className={"row placeholders" +  (this.props.moviesFetched ? '': 'inactive')}>
                     {movieListElement}
                </div>
                <hr/>
                <h2 className="page-header">On TV</h2>
                <div className={"row placeholders" +  (this.props.tvShowsFetched ? '': 'inactive')}>
                     {tvShowsListElement}
                </div>
                <h2 className="page-header">Popular People</h2>
                <div className={"row placeholders " +  (this.props.peopleFetched ? '': 'inactive')}>
                     {usersListElement}
                </div>

            </div>
        )
    }
}
