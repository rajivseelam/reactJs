import React, { Component } from 'react'
import render from 'react-dom'
import { connect } from 'react-redux'
import { fetchMostPopularCelebs } from '../../actions/celebs/most-popular-celeb-actions'
import ItemListContainer  from '../utils/item-list-container'


@connect( (store) => {
    return{
        fetched: store.mostPopularCelebsReducer.fetched,
        userList: store.mostPopularCelebsReducer.userList
    }
})
export default class MostPopularCelebs extends Component{
    componentWillMount(){
        this.props.dispatch(fetchMostPopularCelebs());
    }

    render(){
        var usersListElement = [];
        if(this.props.userList.length > 0){
          usersListElement = this.props.userList.map( (user, index) => {
                return <a href={"/most-popular-celebs/celebs/" + user.id} key={index} className={ (!index ? 'active' : '') }>
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
          <div className="container">
            <h2 className="page-header">Most Popular Celebs</h2>
            <div className={"row placeholders" +  (this.props.fetched ? '': 'inactive')}>
                 {usersListElement}
            </div>
          </div>
        )
    }
}
