import { Button, Header, Group } from '@mantine/core'
import { Link } from 'react-router-dom'

export default function HeaderDiv() {
  return (
    <Header
      height={{ base: 50, md: 70 }}
      sx={(theme) => ({
        padding: theme.spacing.xl,
        mixBlendMode: 'difference',
      })}
    >
      <Group position="center" spacing="100px">
        <Button
          variant="subtle"
          color="dark"
          size="sm"
          component={Link}
          to="/about"
          data-hover="About"
        >
          About
        </Button>
        <Button
          variant="subtle"
          color="dark"
          size="sm"
          component={Link}
          data-hover="Projects"
          to="/"
        >
          Projects
        </Button>
        <Button
          variant="subtle"
          color="dark"
          size="sm"
          component={Link}
          data-hover="Contact"
          to="/contact"
        >
          Contact
        </Button>
      </Group>
    </Header>
  )
}
