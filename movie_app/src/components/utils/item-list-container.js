import React, { Component } from 'react';
import render from 'react-dom';

export default class ItemListContainer extends Component {
    render(){
      var itemListElement = [];
      if(this.props.items.length > 0){
          itemListElement = this.props.items.map( (item, index) => {
                if(index >= 8 && !this.props.displayLength){
                  return false
                }
                return <a href="#" key={index} className={ (!index ? 'active' : '') }>
                    <div className="movie_tile col-xs-6 col-sm-3 placeholder">
                        <img src={(item.poster_path ? "https://image.tmdb.org/t/p/w235_and_h235_bestv2" + item.poster_path: (item.backdrop_path? "https://image.tmdb.org/t/p/w235_and_h235_bestv2" + item.backdrop_path : require('../../images/no-poster.png')) )} width="100%" height="100%" className="img-responsive" alt="Generic placeholder thumbnail" />
                        <div className="row">
                          <h4>{item.title ? item.title.substr(0, 25): item.name.substr(0, 25)}</h4>
                          <span className="pull-left text-muted"> {item.popularity ? item.popularity: ''} </span>
                          <span className="pull-right text-muted"> {item.vote_average ? item.vote_average + "%": '0%' } </span>
                        </div>
                        <div className="row pull-right">
                          <span>{item.release_date ? item.release_date: ''}</span>
                        </div>

                    </div>
                </a>
          });
          return(
            <div>{itemListElement}</div>
          )
      }


      return null


    }
}
