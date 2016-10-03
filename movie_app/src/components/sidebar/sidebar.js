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
                    <li className="no-link">Movies</li>
                    <img src={require('../../images/green_line.png')}/>
                    <li><Link to="/now-playing" activeClassName="active">Now Playing</Link></li>
                    <li><Link to="/upcoming-movies" activeClassName="active">Coming Soon.!!</Link></li>
                    <li><Link to="/widgets" activeClassName="active">Most Popular</Link></li>
                    <li><Link to="/widgets" activeClassName="active">Top Rated</Link></li>
                    <br/>
                    <li className="no-link">TV</li>
                    <img src={require('../../images/blue_line.png')}/>
                    <li><Link to="/tv-shows-on-tv" activeClassName="active">On TV</Link></li>
                    <li><Link to="/widgets" activeClassName="active">Most Popular</Link></li>
                    <li><Link to="/widgets" activeClassName="active">Top Rated</Link></li>
                    <br/>
                    <li className="no-link">Celebs</li>
                    <img src={require('../../images/orange_line.png')}/>
                    <li><Link to="/most-popular-celebs" activeClassName="active">Most Popular</Link></li>
                    <li><Link to="/widgets" activeClassName="active">Born Today</Link></li>
                </ul>
            </div>
        )
    }
}
