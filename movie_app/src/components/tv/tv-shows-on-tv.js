import React, { Component } from 'react'
import render from 'react-dom'
import { connect } from 'react-redux'
import { clearNowPlayingTvShows, fetchNowPlayingTvShows } from '../../actions/tv/tv-shows-on-tv-actions'
import ItemListContainer  from '../utils/item-list-container'

@connect( (store) => {
  return{
    nowPlayingTvShows: store.tvShowsOnTvReducer.nowPlayingtvShows,
    tvShowsFetched: store.tvShowsOnTvReducer.fetched
  }
})
export default class TvShowsOnTv extends Component{
    componentWillMount(){
        this.props.dispatch(fetchNowPlayingTvShows())
    }

    render(){
        var onTvShowsElement = []
        if(this.props.nowPlayingTvShows.length){
            onTvShowsElement = <ItemListContainer urlPrefix='/tv-shows-on-tv/' mediaType='tv' displayLength='all' items={this.props.nowPlayingTvShows} />
        }

        return(
          <div className="container">
              <h2 className="page-header">On TV</h2>
              <div className={"row placeholders" +  (this.props.moviesFetched ? '': 'inactive')}>
                   {onTvShowsElement}
              </div>
          </div>
        )
    }
}
