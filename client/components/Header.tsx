import { Button, Header, Grid } from '@mantine/core'
import { Link } from 'react-router-dom'

import LightDarkButton from './LightDarkButton'

export default function HeaderDiv() {
  return (
    <Header
      fixed
      height={{ base: 50, md: 70 }}
      p="lg"
      sx={(theme) => ({
        padding: theme.spacing.xl,
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.yellow[9]
            : theme.colors.yellow[0],
        borderColor:
          theme.colorScheme === 'dark'
            ? theme.colors.yellow[9]
            : theme.colors.yellow[0],
      })}
    >
      <Grid justify="flex-end">
        <Button
          variant="subtle"
          color="dark"
          size="sm"
          uppercase
          component={Link}
          to="/about"
        >
          About
        </Button>
        <Button
          color="yellow"
          size="sm"
          uppercase
          component={Link}
          to="/contact"
        >
          Contact
        </Button>
        <LightDarkButton />
      </Grid>
    </Header>
  )
}
