import React, { Component } from 'react'
import { Link } from 'react-router'
import '../../stylesheets/sidebar/sidebar'

export default class Sidebar extends Component{
    render() {
        return(
            <div className="col-sm-3 col-md-2 sidebar">
                <ul className="nav nav-sidebar">
                    <li><Link to="/" activeClassName="active">Dashboard</Link></li>
                    <br/>
                    <li><Link to="/widgets" activeClassName="active">Movies</Link></li>
                    <img src={require('../../images/green_line.png')}/>
                    <li><Link to="/" activeClassName="active">Coming Soon.!!</Link></li>
                    <li><Link to="/" activeClassName="active">Most Popular</Link></li>
                    <li><Link to="/" activeClassName="active">Top Rated</Link></li>
                    <li><Link to="/" activeClassName="active">Lowest Rated</Link></li>
                    <br/>
                    <li><Link to="/" activeClassName="active">TV</Link></li>
                    <img src={require('../../images/blue_line.png')}/>
                    <li><Link to="/" activeClassName="active">Most Popular</Link></li>
                    <li><Link to="/" activeClassName="active">Top Rated</Link></li>
                    <br/>
                    <li><Link to="/" activeClassName="active">Celebs</Link></li>
                    <img src={require('../../images/orange_line.png')}/>
                    <li><Link to="/" activeClassName="active">Most Popular</Link></li>
                    <li><Link to="/" activeClassName="active">Born Today</Link></li>
                </ul>
            </div>
        )
    }
}
