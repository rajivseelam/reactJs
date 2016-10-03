import React, { Component } from 'react'
import render from 'react-dom'
import { connect } from 'react-redux'
import { fetchUpcomingMovies } from '../../actions/movies/upcoming-movies-actions'
import ItemListContainer  from '../utils/item-list-container'


@connect( (store) => {
    return {
        upcomingMovies: store.upcomingMoviesReducer.upcomingMovies,
        dates: store.upcomingMoviesReducer.dates,
        fetched: store.upcomingMoviesReducer.fetched
    }
})
export default class UpcomingMovies extends Component{
    componentWillMount(){
        this.props.dispatch(fetchUpcomingMovies())
    }

    render(){
        var upcomingMoviesElement = [];
        var minimum = null;
        if(this.props.upcomingMovies.length){
          upcomingMoviesElement = <ItemListContainer displayLength='all' items={this.props.upcomingMovies} />
          minimum = this.props.dates.minimum
        }
        return(
          <div className="container">
              <h2 className="page-header">
                  <span>Upcoming Movies</span>
                  <span className="pull-right dates">
                    <span className={(this.props.dates.maximum ? '': 'inactive')}> {this.props.dates.maximum } </span>
                    <span> - </span>
                    <span className={(this.props.dates.minimum ? '': 'inactive')}> {this.props.dates.minimum ? this.props.dates.minimum : "" } </span>
                  </span>
              </h2>

              <div className={"row placeholders " +  (this.props.fetched ? '': 'inactive')}>
                   {upcomingMoviesElement}
              </div>
          </div>
        )
    }
}
