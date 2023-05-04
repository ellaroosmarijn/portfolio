import type { ThunkAction } from '../store'

import { Project } from '../../shared/types'
import { getAllProjects } from '../apis/apiClient'

export const GET_PROJECTS_PENDING = 'GET_PROJECTS_PENDING'
export const GET_PROJECTS_FULFILLED = 'GET_PROJECTS_FULFILLED'
export const GET_PROJECTS_ERROR = 'GET_PROJECTS_ERROR'

export type ProjectsAction =
  | { type: typeof GET_PROJECTS_PENDING; payload: void }
  | { type: typeof GET_PROJECTS_FULFILLED; payload: Project[] }
  | { type: typeof GET_PROJECTS_ERROR; payload: string }

export function getAllProjectsPending(): ProjectsAction {
  return {
    type: GET_PROJECTS_PENDING,
  } as ProjectsAction
}

export function getAllBooksFulfilled(project: Project[]): ProjectsAction {
  return {
    type: GET_PROJECTS_FULFILLED,
    payload: project,
  }
}

export function getAllProjectsRequestRejected(error: string): ProjectsAction {
  return {
    type: GET_PROJECTS_ERROR,
    payload: error,
  }
}

export function getProjects(): ThunkAction {
  return (dispatch) => {
    dispatch(getAllProjectsPending())
    return getAllProjects()
      .then((project) => {
        dispatch(getAllBooksFulfilled(project))
      })
      .catch((error: Error) => {
        dispatch(getAllProjectsRequestRejected(error.message))
        throw error
      })
  }
}
