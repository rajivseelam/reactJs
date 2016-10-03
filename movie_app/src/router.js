import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import MainLayout from './components/layouts/main-layout'
import HomePage from './components/home/home-page'
import NowPlaying from './components/movie/now-playing'
import TvShowsOnTv from './components/tv/tv-shows-on-tv'
import MostPopularCelebs from './components/celebs/most-popular-celebs'
import UpcomingMovies from './components/movie/upcoming-movies'
import MostPopularMovies from './components/movie/most-popular-movies'
import TopRatedMovies from './components/movie/top-rated-movies'
import MostPopularTvShows from './components/tv/most-popular-tv-shows'
import TopRatedTvShows from './components/tv/top-rated-tv-shows'
import AiringTodayTvShows from './components/tv/airing-today-tv-shows'

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
            <Route path="most-popular-movies">
                  <IndexRoute component={MostPopularMovies} />
            </Route>
            <Route path="top-rated-movies">
                  <IndexRoute component={TopRatedMovies} />
            </Route>
            <Route path="tv-shows-on-tv">
                  <IndexRoute component={TvShowsOnTv} />
            </Route>
            <Route path="most-popular-tv-shows">
                  <IndexRoute component={MostPopularTvShows} />
            </Route>
            <Route path="top-rated-tv-shows">
                  <IndexRoute component={TopRatedTvShows} />
            </Route>
            <Route path="airing-today-tv-shows">
                  <IndexRoute component={AiringTodayTvShows} />
            </Route>
            <Route path="most-popular-celebs">
                  <IndexRoute component={MostPopularCelebs} />
            </Route>
        </Route>
    </Router>
)
