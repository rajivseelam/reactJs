import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import '../../stylesheets/header/header'
import { fetchSearchItems, startFetchingSearchItems } from '../../actions/search/searchActions'

@connect((store) => {
    return {
      searchItems: store.searchReducer.searchItems,
      fetched: store.searchReducer.fetched
    }
})

export default class Header extends Component{
    handleSeach(event){
        var searchKeyword = event.target.value;
        this.props.dispatch(startFetchingSearchItems());
        if(searchKeyword)
        this.props.dispatch(fetchSearchItems(searchKeyword));
    }

    clearSearch(event){
        event.target.value = '';
        this.props.dispatch(startFetchingSearchItems());
    }

    handleDetailePage(id, mediaType){
      return location.pathname + "/" + mediaType + "/" + id;
    }

    render(){
        var listElement = [];
        if(this.props.searchItems.length > 0){
           listElement = this.props.searchItems.map( (item, index) => {
             return <a href={'/home/' + (item.media_type != "person" ? item.media_type : 'celebs' ) + '/' + item.id } className={ "list-group-item list-group-item-action " + (!index ? 'active' : '') }>
                <div className="row">
                    <div className="col-md-2">
                        <img src={  (item.poster_path ? "https://image.tmdb.org/t/p/w45_and_h67_bestv2" + item.poster_path : require('../../images/poster_placeholder.png')) } alt="" />
                    </div>
                    <div className="col-md-10">
                        <h5 className="list-group-item-heading">{item.name ? item.name : item.title }</h5>
                        <p className="list-group-item-text">{item.original_title ? item.original_title + ',' : '' } {item.release_date ? item.release_date: ''} </p>
                        <p className="list-group-item-text">{item.vote_average ? item.vote_average + '%': '0%'}</p>
                        <p className="list-group-item-text">{item.overview ? item.overview.substr(0, 60) + '...' : ''}</p>
                    </div>
                </div>
             </a>
           });
        }

        return(
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container nav-container">
                   <div className="navbar-header">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="/home">
                          <img src={require('../../images/logo.png')} alt="" />
                      </a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <form className="navbar-form navbar-right">
                          <input type="text" className="form-control" placeholder="Search for movies/tv shows..." onChange={this.handleSeach.bind(this)} onFocus={this.clearSearch.bind(this)}/>
                          <div className={"list-group " + (this.props.fetched ? '': 'inactive')}>
                             {listElement}
                          </div>
                      </form>
                  </div>
               </div>
            </nav>
        )
    }
}
