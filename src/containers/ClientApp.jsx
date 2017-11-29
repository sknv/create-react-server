import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import configureStore from '../stores/configureStore'
import AppRouter from './AppRouter'

const store = configureStore(window.__PRELOADED_STATE__)

// Allow the passed state to be garbage-collected.
delete window.__PRELOADED_STATE__

const ClientApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  )
}

export default ClientApp
