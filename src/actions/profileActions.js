const ActionType = {
  RECEIVE_PROFILE: 'RECEIVE_PROFILE'
}

const receiveProfile = profile => ({
  type: ActionType.RECEIVE_PROFILE,
  profile
})

// Simulate a HTTP request.
// Must return a Promise to allow requester component to be rendered on server.
const fetchProfile = () => {
  return dispatch =>
    new Promise(resolve =>
      setTimeout(() => {
        const profile = { name: 'User Name' }
        dispatch(receiveProfile(profile))
        resolve(profile)
      }, 100)
    )
}

export { ActionType, fetchProfile }
