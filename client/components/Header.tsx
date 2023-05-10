import { Header, Group, ThemeIcon } from '@mantine/core'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from '@emotion/styled'
import { GoFilePdf } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'

const StyledAnchorLink = styled(AnchorLink)`
  text-align: center;
  margin-right: 6px;
  border-width: 0px;
  font-weight: 600;
  color: #ffffff;
  transition: background-color 0.2s;
  text-decoration: none;
  font-size: 1.25rem;

  &:hover {
    background-color: transparent;
  }
`

export default function HeaderDiv(): JSX.Element {
  return (
    <Header height={{ base: 50, md: 70 }}>
      <Group position="center" spacing="100px">
        <StyledAnchorLink href="#about" data-hover="about" offset={200}>
          About
        </StyledAnchorLink>
        <StyledAnchorLink href="#projects" data-hover="projects" offset={200}>
          Projects
        </StyledAnchorLink>
        <StyledAnchorLink href="#contact" data-hover="contact" offset={200}>
          Contact
        </StyledAnchorLink>
      </Group>
      <Group
        sx={() => ({ position: 'absolute', right: '1em' })}
        position="center"
        spacing="10px"
        align="center"
      >
        <a href="https://www.linkedin.com/in/ellarrobinson/">
          <ThemeIcon variant="light">
            <FaLinkedin />
          </ThemeIcon>
        </a>
        <a href="EllaRobinson_CV.pdf">
          <ThemeIcon variant="light">
            <GoFilePdf />
          </ThemeIcon>
        </a>
      </Group>
    </Header>
  )
}
