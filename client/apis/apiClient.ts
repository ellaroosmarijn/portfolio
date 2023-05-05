import request from 'superagent'

import { Project } from '../../shared/types'

export async function getAllProjects(): Promise<Project[]> {
  const response = await request.get('/')
  return response.body
}
