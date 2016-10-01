import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import '../../stylesheets/home/home'
import { fetchNowPlayingMovies, clearNowPlayingMovies } from '../../actions/movies/movieActions'
import { fetchNowPlayingTvShows, clearNowPlayingTvShows } from '../../actions/tv/tvActions'
import { fetchUsers, clearUsersList } from '../../actions/users/userActions'
import ItemListContainer  from '../utils/item-list-container'

@connect( (store) => {
    return{
      nowPlayingMovies: store.movieReducer.nowPlayingMovies,
      moviesFetched: store.movieReducer.fetched,
      moviesCount: store.movieReducer.moviesCount,
      nowPlayingTvShows: store.tvReducer.nowPlayingtvShows,
      tvShowsFetched: store.tvReducer.fetched,
      tvShowsCount: store.tvReducer.tvShowsCount,
      usersCount: store.userReducer.usersCount,
      userList: store.userReducer.userList,
      peopleFetched: store.userReducer.fetched
    }
})
export default class HomePage extends Component {
    componentWillMount(){
        this.props.dispatch(clearNowPlayingMovies())
        this.props.dispatch(fetchNowPlayingMovies())
        this.props.dispatch(clearNowPlayingTvShows())
        this.props.dispatch(fetchNowPlayingTvShows())
        this.props.dispatch(clearUsersList())
        this.props.dispatch(fetchUsers())
    }

    render(){
        var movieListElement = [];
        if(this.props.nowPlayingMovies.length > 0){
            movieListElement = <ItemListContainer items={this.props.nowPlayingMovies} />
        }
        var tvShowsListElement = [];
        if(this.props.nowPlayingTvShows.length > 0){
            tvShowsListElement = <ItemListContainer items={this.props.nowPlayingTvShows} />
        }

        var usersListElement = [];
        if(this.props.userList.length > 0){
          usersListElement = this.props.userList.map( (user, index) => {
                if(index >= 8){
                  return false
                }
                return <a href="#" key={index} className={ (!index ? 'active' : '') }>
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
                <div className={"row placeholders" +  (this.props.peopleFetched ? '': 'inactive')}>
                     {usersListElement}
                </div>

            </div>
        )
    }
}
