import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import MainLayout from './components/layouts/main-layout'
import HomePage from './components/home/home-page'
import UserPage from './components/users/user-page'

export default(
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/">
                  <IndexRoute component={HomePage} />
            </Route>
            <Route path="widgets">
                  <IndexRoute component={UserPage} />
            </Route>
        </Route>
    </Router>
)
