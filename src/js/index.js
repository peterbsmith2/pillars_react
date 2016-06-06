import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import routes from './routes'


render((
  <Router history={hashHistory} routes={routes}>
  </Router>
), document.getElementById('root'))

