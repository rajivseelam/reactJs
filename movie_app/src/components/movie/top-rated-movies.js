import React, { Component } from 'react'
import render from 'react-dom'
import { connect } from 'react-redux'
import { fetchTopRatedMovies } from '../../actions/movies/top-rated-movies-actions'
import ItemListContainer  from '../utils/item-list-container'

@connect( (store) => {
    return{
        topRatedMovies: store.topRatedMoviesReducer.topRatedMovies,
        fetched: store.topRatedMoviesReducer.fetched
    }
})
export default class TopRatedMovies extends Component{
    componentWillMount(){
        this.props.dispatch(fetchTopRatedMovies())
    }
    render(){
        var topRatedMoviesElement = [];
        if(this.props.topRatedMovies.length){
            topRatedMoviesElement = <ItemListContainer displayLength='all' items={this.props.topRatedMovies} />
        }
        return(
          <div className="container">
              <h2 className="page-header"> Top Rated Movies</h2>
              <div className={"row placeholders " +  (this.props.fetched ? '': 'inactive')}>
                   {topRatedMoviesElement}
              </div>
          </div>
        )
    }
}
