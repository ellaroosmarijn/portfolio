import connection from '../connection'
import { getAllProjects, getProjectByName, getFeaturedProjects } from '../db'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(() => {
  return connection.seed.run()
})

afterAll(() => {
  return connection.destroy()
})

describe('getAllProjects will return all projects', () => {
  it('returns all artworks', async () => {
    expect.assertions(1)

    const allProjects = await getAllProjects()

    expect(allProjects).toHaveLength(4)
  })
})

describe('getProjectByName will return projects with the specified name', () => {
  it('returns all artworks', async () => {
    expect.assertions(1)

    const { name: projectName } = await getProjectByName('TwoMindsOne')

    expect(projectName).toBe('TwoMindsOne')
  })
})

describe('getFeaturedProjects will return projects by featured true/false', () => {
  it('returns by featured true/false', async () => {
    expect.assertions(1)

    const featured = await getFeaturedProjects(true)

    expect(featured).toHaveLength(4)
  })
})
