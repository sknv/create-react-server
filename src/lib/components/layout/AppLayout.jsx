import React from 'react'
import { connect } from 'react-redux'

import { toggleSidebar } from '../../../actions/layoutActions'

const AppLayout = ({ sidebar, content, isSidebarVisible, onSidebarToggle }) => {
  return (
    <div
      className={'app-layout ' + (isSidebarVisible ? '-sidebar-visible' : '')}>
      <aside className="app-sidebar">{sidebar}</aside>

      <div className="app-page">{content}</div>

      <div className="app-layout-overlay" onClick={onSidebarToggle} />
    </div>
  )
}

//
// Container implementation.
//

const mapStateToProps = state => ({
  isSidebarVisible: state.layout.isSidebarVisible
})

const mapDispatchToProps = dispatch => ({
  onSidebarToggle: () => dispatch(toggleSidebar())
})

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout)
