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
import MovieDetailedPage from './components/movie/movie-detailed-page'
import TvShowDetailedPage from './components/tv/tv-show-detailed-page'
import celebsDetailedPage from './components/celebs/celebs-detailed-page'

export default(
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="home">
              <IndexRoute component={HomePage} />
              <Route path="movie/:id" component={MovieDetailedPage}/>
              <Route path="tv/:id" component={TvShowDetailedPage}/>
              <Route path="celebs/:id" component={celebsDetailedPage}/>
            </Route>
            <Route path="now-playing">
                <IndexRoute component={NowPlaying} />
                <Route path="movie/:id" component={MovieDetailedPage}/>
            </Route>
            <Route path="upcoming-movies">
                  <IndexRoute component={UpcomingMovies} />
                  <Route path="movie/:id" component={MovieDetailedPage}/>
            </Route>
            <Route path="most-popular-movies">
                  <IndexRoute component={MostPopularMovies} />
                  <Route path="movie/:id" component={MovieDetailedPage}/>
            </Route>
            <Route path="top-rated-movies">
                  <IndexRoute component={TopRatedMovies} />
                  <Route path="movie/:id" component={MovieDetailedPage}/>
            </Route>
            <Route path="tv-shows-on-tv">
                  <IndexRoute component={TvShowsOnTv} />
                    <Route path="tv/:id" component={TvShowDetailedPage}/>
            </Route>
            <Route path="most-popular-tv-shows">
                  <IndexRoute component={MostPopularTvShows} />
                    <Route path="tv/:id" component={TvShowDetailedPage}/>
            </Route>
            <Route path="top-rated-tv-shows">
                  <IndexRoute component={TopRatedTvShows} />
                    <Route path="tv/:id" component={TvShowDetailedPage}/>
            </Route>
            <Route path="airing-today-tv-shows">
                  <IndexRoute component={AiringTodayTvShows} />
                    <Route path="tv/:id" component={TvShowDetailedPage}/>
            </Route>
            <Route path="most-popular-celebs">
                <IndexRoute component={MostPopularCelebs} />
                <Route path="celebs/:id" component={celebsDetailedPage}/>
            </Route>

          </Route>
    </Router>
)
