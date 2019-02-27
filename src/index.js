// import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

const rootEl = document.getElementById('root')

if (rootEl === null) {
  throw new Error('No root element')
}

render(<Root />, rootEl)
