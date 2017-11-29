import { ActionType } from '../actions/layoutActions'

const initialState = {
  isSidebarVisible: false
}

const layout = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_SIDEBAR:
      return Object.assign({}, state, {
        isSidebarVisible: !state.isSidebarVisible
      })

    default:
      return state
  }
}

export default layout
