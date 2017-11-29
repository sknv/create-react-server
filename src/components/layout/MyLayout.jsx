import React from 'react'

import AppLayout from '../../lib/components/layout/AppLayout'

import MySidebar from './MySidebar'
import MyPage from './MyPage'

const MyLayout = ({ children }) => {
  return (
    <AppLayout sidebar={<MySidebar />} content={<MyPage>{children}</MyPage>} />
  )
}

export default MyLayout
