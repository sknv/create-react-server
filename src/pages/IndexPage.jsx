import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'

// import htmlUtil from '../lib/utils/htmlUtil'
import { fetchProfile } from '../actions/profileActions'

const IndexPage = ({ profile }) => {
  if (_.isEmpty(profile)) {
    return <progress />
  }

  return <p>Добро пожаловать, {profile.name}</p>
}

//
// Container implementation.
//

class IndexPageContainer extends React.PureComponent {
  // Fetch container data for rendering on server.
  // Must be static function with a single parameter - "store".
  static fetchData(dispatch) {
    return dispatch(fetchProfile()).then(profile => ({
      pageTitle: profile.name,
      pageDescription: 'Profile description'
    }))
  }

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
    return <IndexPage profile={profile} />
  }
}

const mapStateToProps = state => ({ profile: state.profile.data })

export default connect(mapStateToProps)(IndexPageContainer)
