import React, { Component } from 'react'
import render from 'react-dom'
import { connect } from 'react-redux'
import { fetchMostPopularMovies } from '../../actions/movies/most-popular-movies-actions'
import ItemListContainer  from '../utils/item-list-container'

@connect( (store) => {
    return{
        mostPopularMovies: store.mostPopularMoviesReducer.mostPopularMovies,
        fetched: store.mostPopularMoviesReducer.fetched
    }
})
export default class MostPopularMovies extends Component{
    componentWillMount(){
        this.props.dispatch(fetchMostPopularMovies());
    }

    render(){
        var mostPopularMoviesElement = [];
        if(this.props.mostPopularMovies.length){
          mostPopularMoviesElement = <ItemListContainer displayLength='all' items={this.props.mostPopularMovies} />
        }
        return(
          <div className="container">
              <h2 className="page-header"> Most Popular Movies</h2>
              <div className={"row placeholders " +  (this.props.fetched ? '': 'inactive')}>
                   {mostPopularMoviesElement}
              </div>
          </div>
        )
    }
}
