import React, { Component } from 'react'
import render from 'react-dom'
import { connect } from 'react-redux'
import { fetchMostPopularTvShows } from '../../actions/tv/most-popular-tv-shows-actions'
import ItemListContainer  from '../utils/item-list-container'


@connect( (store) => {
    return{
        mostPopularTvShows: store.mostPopularTvShowsReducer.mostPopularTvShows,
        fetched: store.mostPopularTvShowsReducer.fetched
    }
})
export default class MostPopularTvShows extends Component{
    componentWillMount(){
        this.props.dispatch(fetchMostPopularTvShows());
    }

    render(){
        var mostPopularTvShowsElement = []
        if(this.props.mostPopularTvShows.length){
            mostPopularTvShowsElement = <ItemListContainer displayLength='all' items={this.props.mostPopularTvShows} />
        }
        return(
          <div className="container">
              <h2 className="page-header">Most Popular TV Shows</h2>
              <div className={"row placeholders " +  (this.props.fetched ? '': 'inactive')}>
                   {mostPopularTvShowsElement}
              </div>
          </div>
        )
    }
}
