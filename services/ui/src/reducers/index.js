import { combineReducers } from 'redux'
import loggedUser from './loggedUser'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  loggedUser,
  todos,
  visibilityFilter
})
