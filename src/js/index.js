import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import routes from './routes'
import configureStore from './store/configureStore'

const store = configureStore()

render((
  <Router history={hashHistory} routes={routes}>
  </Router>
), document.getElementById('root'))

