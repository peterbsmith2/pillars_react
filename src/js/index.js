import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import routes from './routes'
import configureStore from './store/configureStore'
import Root from './containers/Root'

const store = configureStore()

render((
  <Root history={hashHistory} store={store} />
), document.getElementById('root'))

