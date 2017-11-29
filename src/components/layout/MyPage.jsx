import React from 'react'

import MyHeader from './MyHeader'

const MyPage = ({ children }) => {
  return (
    <div>
      <MyHeader />
      {children}
    </div>
  )
}

export default MyPage
