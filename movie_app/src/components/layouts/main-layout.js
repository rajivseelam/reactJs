import React, { Component } from 'react'
import { Link } from 'react-router'
import '../../stylesheets/common/main'

export default class MainLayout extends Component {
    render(){
        return(
            <div className='main-container'>
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="container nav-container">
                       <div className="navbar-header">
                          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                              <span className="sr-only">Toggle navigation</span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                          </button>
                          <a className="navbar-brand" href="#">
                              <img src={require('../../images/logo.png')} alt="" />
                          </a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                          <form className="navbar-form navbar-right">
                            <input type="text" className="form-control" placeholder="Search for movies/tv shows..." />
                          </form>
                      </div>
                   </div>
                </nav>
                <div className="main-container">
                    <div className="col-lg-12">
                        <h1>Logo Nav by Start Bootstrap</h1>
                        <p>Note: You may need to adjust some CSS based on the size of your logo. The default logo size is  pixels.</p>
                    </div>
                </div>
            </div>
        )
    }
}
