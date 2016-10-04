import React, { Component } from 'react'
import render from 'react-dom'
import { connect } from 'react-redux'
import { fetchAiringTodayTvShows } from '../../actions/tv/airing-today-tv-shows-actions'
import ItemListContainer  from '../utils/item-list-container'

@connect( (store) => {
    return{
        airingTodayTvShows: store.airingTodayTvShowsReducer.airingTodayTvShows,
        fetched: store.airingTodayTvShowsReducer.fetched
    }
})
export default class AiringTodayTvShows extends Component{
    componentWillMount(){
        this.props.dispatch(fetchAiringTodayTvShows())
    }

    render(){
        var airingTodayTvShowsElement = [];
        if(this.props.airingTodayTvShows.length){
            airingTodayTvShowsElement = <ItemListContainer urlPrefix='/airing-today-tv-shows/' mediaType='tv' displayLength='all' items={this.props.airingTodayTvShows} />
        }
        return(
          <div className="container">
              <h2 className="page-header">Airing Today TV Shows</h2>
              <div className={"row placeholders " +  (this.props.fetched ? '': 'inactive')}>
                   {airingTodayTvShowsElement}
              </div>
          </div>
        )
    }
}
