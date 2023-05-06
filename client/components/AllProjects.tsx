import { Grid } from '@mantine/core'
import { useEffect } from 'react'

import { getProjects } from '../actions'
import { useAppDispatch } from '../hooks/hooks'
import ContentBox from './ContentBox'

export default function AllProjectsList() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProjects())
  }, [dispatch])

  return (
    <ContentBox>
      <Grid>
        <Grid.Col span={5}>Featured 1</Grid.Col>
        <Grid.Col span={5}>Featured 2</Grid.Col>
        <Grid.Col span={5}>Featured 3</Grid.Col>
        <Grid.Col span={5}>Featured 4</Grid.Col>
        <Grid.Col span={5}>Featured 5</Grid.Col>
        <Grid.Col span={5}>Featured 6</Grid.Col>
      </Grid>
    </ContentBox>
  )
}
