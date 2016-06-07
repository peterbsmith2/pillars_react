import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

function configureStore() {
  const logger = createLogger()

  const middleware = [thunk, logger]

  return createStore(
    rootReducer,
    compose(
      applyMiddleware(...middleware),
      DevTools.instrument()
    )
  )
}

export default configureStore

