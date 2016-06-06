import { createStore } from 'redux'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

function configureStore() {
  const store= createStore(
    rootReducer,
    DevTools.instrument()
  )

  return store
}

export default configureStore

