import React, { Component } from 'react'
import render from 'react-dom'
import { connect } from 'react-redux'
import { fetchTopRatedTvShows } from '../../actions/tv/top-rated-tv-shows-actions'
import ItemListContainer  from '../utils/item-list-container'

@connect( (store) => {
    return{
        topRatedTvShows: store.topRatedTvShowsReducer.topRatedTvShows,
        fetched: store.topRatedTvShowsReducer.fetched
    }
})
export default class TopRatedTvShows extends Component{
    componentWillMount(){
        this.props.dispatch(fetchTopRatedTvShows())
    }

    render(){
        var topRatedTvShowsElement = [];
        if(this.props.topRatedTvShows.length){
            topRatedTvShowsElement = <ItemListContainer urlPrefix='/top-rated-tv-shows/' mediaType='tv' displayLength='all' items={this.props.topRatedTvShows} />
        }
        return(
          <div className="container">
              <h2 className="page-header">Top Rated TV Shows</h2>
              <div className={"row placeholders " +  (this.props.fetched ? '': 'inactive')}>
                   {topRatedTvShowsElement}
              </div>
          </div>
        )
    }
}
