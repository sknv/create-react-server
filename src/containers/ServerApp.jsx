import React from 'react'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'

import AppRouter from './AppRouter'

const ServerApp = ({ store, location, context }) => {
  return (
    <Provider store={store}>
      <StaticRouter location={location} context={context}>
        <AppRouter />
      </StaticRouter>
    </Provider>
  )
}

export default ServerApp
