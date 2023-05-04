import connection from './connection'

const db = connection

export function getAllProjects() {
  return db('projects')
}

export function getProjectByName(name: string) {
  return db('projects').where({ name }).first()
}