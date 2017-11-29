import { combineReducers } from 'redux'

import layout from './layoutReducer'
import profile from './profileReducer'

const appReducer = combineReducers({
  layout,
  profile
})

export default appReducer
