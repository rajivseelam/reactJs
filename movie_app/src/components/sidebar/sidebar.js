import React, { Component } from 'react'
import { Link } from 'react-router'
import '../../stylesheets/sidebar/sidebar'

export default class Sidebar extends Component{
    render() {
        return(
            <div className="col-sm-3 col-md-2 sidebar">
                <ul className="nav nav-sidebar">
                    <li className="active"><Link to="/" activeClassName="active">Home</Link></li>
                    <li><Link to="/widgets" activeClassName="active">Widgets</Link></li>
                </ul>
            </div>
        )
    }
}
