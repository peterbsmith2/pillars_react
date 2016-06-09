import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'
import createLogger from 'redux-logger'
import moment from 'moment'

function configureStore() {
  const logger = createLogger()

  const middleware = [thunk, logger]

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middleware),
      DevTools.instrument()
    )
  )
  return store
}

export default configureStore
