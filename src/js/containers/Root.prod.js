import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import route from '../routes'
import { Router } from 'react-route'

class Root extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
