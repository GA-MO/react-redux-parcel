import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import App from './App'
import route from '../routes'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)

if (module.hot) {
  module.hot.dispose(() => (window.__INITIAL_STATE__ = store.getState()))
}

const AppProvider = () => (
  <Provider store={store}>
    <App>{route}</App>
  </Provider>
)

let Root = AppProvider

if (process.env.NODE_ENV === 'development') {
  Root = require('react-hot-loader').hot(module)(AppProvider)
}

export default Root
