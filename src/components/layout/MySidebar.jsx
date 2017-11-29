import React from 'react'
import { Route } from 'react-router-dom'

import AccountInfo from './sidebar/AccountInfo'
import SideMenu from './sidebar/SideMenu'

const MySidebar = () => {
  return (
    <div className="h-100">
      <AccountInfo />
      {/* Deal with blocking menu re-rendering by redux "connect" function */}
      <Route component={SideMenu} />
    </div>
  )
}

export default MySidebar
