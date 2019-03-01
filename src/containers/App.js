import React, { Suspense } from 'react'
import { Global, css } from '@emotion/core'
import { Router } from 'react-router-dom'
import { history } from '../utils'

const globalStyles = css`
  html,
  body {
    background: #fcfcfc;
  }
`
export default props => (
  <Suspense fallback={null}>
    <Global styles={globalStyles} />
    <Router history={history}>{props.children}</Router>
  </Suspense>
)
