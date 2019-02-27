import React, { Fragment, lazy } from 'react'
import { Router, Route } from 'react-router-dom'
import { history } from './utils'

const Home = lazy(() => import('./containers/Home'))

export default (
  <Router history={history}>
    <Fragment>
      <Route path='/' component={() => <Home />} exact />
    </Fragment>
  </Router>
)
