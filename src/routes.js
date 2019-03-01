import React, { Fragment, lazy } from 'react'
import { Route } from 'react-router-dom'

const Home = lazy(() => import('./containers/Home'))

export default (
  <Fragment>
    <Route path='/' component={() => <Home />} exact />
  </Fragment>
)
