import { ActionType } from '../actions/profileActions'

const initialState = {
  data: {}
}

const profile = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.RECEIVE_PROFILE:
      return Object.assign({}, state, { data: action.profile })

    default:
      return state
  }
}

export default profile
