import express from 'express'
import { getAllProjects } from '../db/db'

const router = express.Router()

router.get('/projects', async (_req, res) => {
  try {
    const allProjects = await getAllProjects()
    res.json(allProjects)
  } catch (error) {
    res.status(500).json({
      error: 'There was an error retrieving all of the projects',
    })
  }
})
