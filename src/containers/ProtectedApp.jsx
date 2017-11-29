import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MyLayout from '../components/layout/MyLayout'

import IndexPage from '../pages/admin/IndexPage'
import ProfilePage from '../pages/admin/settings/ProfilePage'
import NotFoundPage from '../pages/NotFoundPage'

const ProtectedApp = () => {
  return (
    <MyLayout>
      <Switch>
        <Route exact path="/admin" component={IndexPage} />
        <Route exact path="/admin/settings/profile" component={ProfilePage} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </MyLayout>
  )
}

export default ProtectedApp
