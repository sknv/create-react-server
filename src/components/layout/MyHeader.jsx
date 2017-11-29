import React from 'react'

import SidebarToggler from './header/SidebarToggler'

const MyHeader = () => {
  return (
    <header className="container-fluid navbar-dark header">
      <SidebarToggler />

      <form className="_flex-grow-1">
        <input type="text" className="form-control" placeholder="Поиск" />
      </form>
    </header>
  )
}

export default MyHeader
