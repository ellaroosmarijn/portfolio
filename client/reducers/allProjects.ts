import { Project } from '../../shared/types'

import {
  ProjectsAction,
  GET_PROJECTS_PENDING,
  GET_PROJECTS_FULFILLED,
  GET_PROJECTS_ERROR,
} from '../actions'

interface ProjectState {
  data: Project[] | undefined
  error: string | undefined
  loading: boolean
}

const initialState: ProjectState = {
  data: undefined,
  error: undefined,
  loading: false,
}

const allProjectsReducer = (
  state = initialState,
  action: ProjectsAction
): ProjectState => {
  const { type, payload } = action

  switch (type) {
    case GET_PROJECTS_PENDING:
      return {
        data: undefined,
        error: undefined,
        loading: true,
      }
    case GET_PROJECTS_FULFILLED:
      return {
        data: payload,
        error: undefined,
        loading: false,
      }
    case GET_PROJECTS_ERROR:
      return {
        data: undefined,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}

export default allProjectsReducer
