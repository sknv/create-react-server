import React from 'react'
import { Switch, Route } from 'react-router-dom'

import routes from '../config/routes'
import ProtectedRoute from '../components/ProtectedRoute'
import ProtectedApp from './ProtectedApp'
import NotFoundPage from '../pages/NotFoundPage'

const renderRoutes = () => {
  return routes.map(route => <Route key={route.path} {...route} />)
}

const AppRouter = () => {
  return (
    <Switch>
      {renderRoutes()}

      <ProtectedRoute path="/admin" component={ProtectedApp} />

      <Route path="*" component={NotFoundPage} />
    </Switch>
  )
}

export default AppRouter
