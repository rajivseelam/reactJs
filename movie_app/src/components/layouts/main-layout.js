import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'
import '../../stylesheets/common/main'

export default class MainLayout extends Component {
    render(){
        return(
            <div className='main-container'>
                  <Header/>
                  <div className="container-fluid">
                      <div className="row">
                          <Sidebar />
                          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                              <main>
                                  {this.props.children}
                              </main>
                          </div>
                      </div>
                    </div>
            </div>
        )
    }
}
