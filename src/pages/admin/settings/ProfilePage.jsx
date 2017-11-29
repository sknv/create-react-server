import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'

import { fetchProfile } from '../../../actions/profileActions'
import MyContent from '../../../components/layout/MyContent'

const ProfilePage = ({ profile }) => {
  const content = _.isEmpty(profile) ? (
    <progress />
  ) : (
    <p>Здесь будут настройки профиля для {profile.name}</p>
  )

  return (
    <MyContent
      header={<h1>Мой профиль</h1>}
      breadcrumbs={
        <ul className="breadcrumb">
          <li className="breadcrumb-item">Настройки</li>
          {/* <li className="breadcrumb-item">
            <Link to="/settings">Настройки</Link>
          </li> */}
        </ul>
      }
      content={content}
    />
  )
}

//
// Container implementation.
//

class ProfilePageContainer extends React.PureComponent {
  componentDidMount() {
    this._fetchProfileIfNeeded()
  }

  _fetchProfileIfNeeded() {
    const { profile, dispatch } = this.props
    if (_.isEmpty(profile)) {
      dispatch(fetchProfile())
    }
  }

  render() {
    const { profile } = this.props
    return <ProfilePage profile={profile} />
  }
}

const mapStateToProps = state => ({ profile: state.profile.data })

export default connect(mapStateToProps)(ProfilePageContainer)
