import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import MainLayout from './components/layouts/main-layout'
import HomePage from './components/home/home-page'
import NowPlaying from './components/movie/now-playing'
import TvShowsOnTv from './components/tv/tv-shows-on-tv'
import MostPopularCelebs from './components/celebs/most-popular-celebs'
import UserPage from './components/users/user-page'
import UpcomingMovies from './components/movie/upcoming-movies'

export default(
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/">
                  <IndexRoute component={HomePage} />
            </Route>
            <Route path="now-playing">
                  <IndexRoute component={NowPlaying} />
            </Route>
            <Route path="upcoming-movies">
                  <IndexRoute component={UpcomingMovies} />
            </Route>
            <Route path="tv-shows-on-tv">
                  <IndexRoute component={TvShowsOnTv} />
            </Route>
            <Route path="most-popular-celebs">
                  <IndexRoute component={MostPopularCelebs} />
            </Route>

            <Route path="now-playing">
                  <IndexRoute component={UserPage} />
            </Route>
        </Route>
    </Router>
)
