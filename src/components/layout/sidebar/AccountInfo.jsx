import React from 'react'
import { Link } from 'react-router-dom'

// import featherUtil from '../../../../lib/utils/feather/featherUtil'

const AccountInfo = () => {
  return (
    <div className="account-info">
      <Link to="/admin/settings/profile">
        {/* {featherUtil.render('user', { className: 'mr-2' })} */}
        User Name
      </Link>
    </div>
  )
}

export default AccountInfo
