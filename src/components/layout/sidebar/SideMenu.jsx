import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { toggleSidebar } from '../../../actions/layoutActions'
import deviceUtil from '../../../lib/utils/deviceUtil'

const menu = {
  main: [
    { icon: 'home', label: 'Главная', to: '/admin' }
  ],

  footer: [
    {
      icon: 'settings',
      label: 'Настройки',
      nested: [
        {
          label: 'Профиль',
          to: '/admin/settings/profile'
        }
      ]
    },
    { icon: 'log-out', label: 'Выйти', to: '/auth/logout' }
  ]
}

//
// Container implementation.
//

class SideMenu extends React.PureComponent {
  constructor(props) {
    super(props)

    this._handleNavLinkClick = this._handleNavLinkClick.bind(this)
  }

  _handleNavLinkClick() {
    // Toggle the sidebar on mobile devices.
    if (deviceUtil.isMobile()) {
      const { dispatch } = this.props
      dispatch(toggleSidebar())
    }
  }

  _renderLink(link) {
    const renderNested = () => {
      return link.nested && this._renderMenu(link.nested, 'nested')
    }

    const renderNavLink = () => {
      return (
        <li className="nav-item" key={link.to}>
          <NavLink
            exact
            to={link.to}
            className="nav-link"
            activeClassName="active"
            onClick={this._handleNavLinkClick}>
            {link.label}
          </NavLink>
          {renderNested()}
        </li>
      )
    }

    const renderLabelLink = () => {
      return (
        <li className="nav-item" key={link.label}>
          <a className="nav-link">
            {link.label}

            {/* Sample badge */}
            <span className="badge badge-danger sidemenu-badge">1</span>
          </a>
          {renderNested()}
        </li>
      )
    }

    return link.to ? renderNavLink() : renderLabelLink()
  }

  _renderMenu(menuLinks, additionalClassName = '') {
    return (
      <ul className={'nav flex-column flex-nowrap ' + additionalClassName}>
        {menuLinks.map(link => this._renderLink(link))}
      </ul>
    )
  }

  render() {
    return (
      <nav className="sidemenu">
        {this._renderMenu(menu.main, '-sidemenu-grow mb-3')}
        {this._renderMenu(menu.footer)}
      </nav>
    )
  }
}

export default connect()(SideMenu)
