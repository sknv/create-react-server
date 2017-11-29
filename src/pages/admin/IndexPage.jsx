import React from 'react'
import { Link } from 'react-router-dom'

import MyContent from '../../components/layout/MyContent'

const IndexPage = () => {
  return (
    <MyContent
      header={<h1>Главная страница</h1>}
      actions={
        <Link to="/admin/settings/profile" className="btn btn-primary">
          Профиль
        </Link>
      }
      content={<p>Здесь будет общая информация, статистика и т.п.</p>}
    />
  )
}

export default IndexPage
