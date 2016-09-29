import React, { Component } from 'react'
import { Link } from 'react-router'

import '../../stylesheets/common/footer'


export default class MainLayout extends Component {
    render(){
        return(
            <div className='container'>
              <header className="primary-header"></header>
              <aside className="primary-aside">
                <ul>
                    <li><Link to="/" activeClassName="active">Home</Link></li>
                    <li><Link to="/widgets" activeClassName="active">Widgets</Link></li>
                </ul>
              </aside>
              <main>
                  {this.props.children}
              </main>
            </div>
        )
    }
}
