import React, { Component } from 'react'
import render from 'react-dom'

export default class MovieInfo extends Component{
    render(){
        var movieElement = null;
        if(this.props.movieDetails){
            let item = this.props.movieDetails;
            movieElement = <div className="row">
                <div className="col-md-4 main">
                <img src={(item.poster_path ? "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + item.poster_path: (item.backdrop_path? "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + item.backdrop_path : require('../../../images/no-poster.png')) )} width="100%" height="100%" className="img-responsive" alt="Generic placeholder thumbnail" />
                </div>
                <div className="col-md-8 main">
                    <h3> {item.title? item.title: ''} </h3> 
                </div>
            </div>
        }

        return(
            <div className="container-fluid">
                {movieElement}
            </div>
         )
    }
}
