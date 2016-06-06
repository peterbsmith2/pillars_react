import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import App from './components/App'
import DailyDonut from './components/DailyDonut'
import Dashboard from './components/Dashboard'

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="dashboard" />
    <Route path="daily-donut" component={DailyDonut} />
    <Route path="dashboard" component={Dashboard} />
  </Route>
)

