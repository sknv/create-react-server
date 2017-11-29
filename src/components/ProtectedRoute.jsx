import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const isUserLoggedIn = () => {
  return true
}

const ProtectedRoute = ({ component: Component }) => {
  return (
    <Route
      render={props =>
        isUserLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/auth/login',
              state: { from: props.location }
            }}
          />
        )}
    />
  )
}

export default ProtectedRoute
