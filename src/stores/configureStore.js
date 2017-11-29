import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import appReducer from '../reducers'

const configureStore = preloadedState => {
  return createStore(
    appReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  )
}

export default configureStore
