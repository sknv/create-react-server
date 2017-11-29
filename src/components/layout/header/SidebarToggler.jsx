import React from 'react'
import { connect } from 'react-redux'

import { toggleSidebar } from '../../../actions/layoutActions'

const SidebarToggler = ({ onSidebarToggle }) => {
  return (
    <button
      className="app-sidebar-toggler navbar-toggler d-md-none"
      type="button"
      aria-label="Toggle navigation"
      onClick={onSidebarToggle}>
      <span className="navbar-toggler-icon" />
    </button>
  )
}

//
// Container implementation.
//

const mapDispatchToProps = dispatch => ({
  onSidebarToggle: () => dispatch(toggleSidebar())
})

export default connect(null, mapDispatchToProps)(SidebarToggler)
