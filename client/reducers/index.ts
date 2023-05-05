import { combineReducers } from 'redux'

import allProjects from './allProjects'

export default combineReducers({
  ProjectState: allProjects,
})
