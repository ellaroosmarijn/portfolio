import { Header, Group } from '@mantine/core'
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
        <AnchorLink href="#about" data-hover="about" offset={200}>
          About
        </AnchorLink>
        <AnchorLink href="#projects" data-hover="projects" offset={200}>
          Projects
        </AnchorLink>
        <AnchorLink href="#contact" data-hover="contact" offset={200}>
          Contact
        </AnchorLink>
      </Group>
    </Header>
  )
}
