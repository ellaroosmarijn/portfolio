import styled from '@emotion/styled'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useCallback, useState } from 'react'

import { BREAKPOINTS } from '../../shared/constants'
import Icon, { IconVariant } from './Icon'

const hoverFadeStyle = `
& a {
  transition: opacity 0.3s;
}
& a:hover {
  opacity: 0.5;
}
`

export const Header = styled.div<NavOpenProps>`
  margin-top: 1rem;
  position: fixed;
  width: 100%;
  mix-blend-mode: difference;
  @media (max-width: ${BREAKPOINTS.md}) {
    margin-top: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 1rem 1rem;
    ${({ open }) => (open ? 'mix-blend-mode: normal' : '')};
  }
`
interface NavOpenProps {
  open: boolean
}

export const HeaderNavWrapper = styled.div<NavOpenProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.md}) {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    background: #000000;
    gap: 70px;
    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
`

export const GroupLinks = styled.div`
  display: flex;
  gap: 100px;

  & a:before {
    content: attr(data-hover);
    text-transform: uppercase;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    transition: color 0.3s;
    transform: rotateX(-90deg);
    transform-origin: 50% 0;
    text-align: center;
  }

  & a {
    text-transform: uppercase;
    position: relative;
    display: inline-block;
    padding: 0;
    transition: transform 0.3s;
    transform-origin: 50% 0;
    transform-style: preserve-3d;
  }

  & a:hover {
    transform: rotateX(90deg) translateY(-22px);
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    gap: 30px;
    flex-direction: column;
    align-items: center;

    & a {
      font-size: 5rem;
    }

    & a:hover {
      transform: none;
    }
    ${hoverFadeStyle}
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    & a {
      font-size: 3rem;
    }
  }
`

export const GroupIcons = styled.div`
  position: absolute;
  display: flex;
  gap: 1rem;
  right: 1.5rem;
  height: 0.75em;

  & a {
    display: block;
    height: 40%;
    aspect-ratio: 1 / 1;
  }

  ${hoverFadeStyle}

  @media (max-width: ${BREAKPOINTS.md}) {
    position: relative;
    right: 0;
    height: 1.5em;
    gap: 15rem;
    margin: -1.25em;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    gap: 5rem;
    margin: -0.4em;
  }
`

export const StyledAnchorLink = styled(AnchorLink)`
  color: inherit;
  font-weight: 600;
  text-decoration: none;
  font-size: 1.25rem;

  @media (max-width: ${BREAKPOINTS.md}) {
    margin: -0.5em;
    font-weight: 700;
  }
`

export const HamburglerButtonWrapper = styled.div`
  position: relative;
  right: 0;
  display: none;
  z-index: 1010;
  cursor: pointer;

  @media (max-width: ${BREAKPOINTS.md}) {
    display: inline-block;
  }
`

const hamburglerBarStyle = `
  width: 35px;
  height: 5px;
  background-color: #ffffff;
  margin: 6px 0;
  transition: 0.4s;
  mix-blend-mode: difference;
`

const BarOne = styled.div`
  ${hamburglerBarStyle}
  .hamburgler-button.hamburgler-button__open & {
    transform: translate(0, 11px) rotate(-45deg);
  }
`
const BarTwo = styled.div`
  ${hamburglerBarStyle}
  .hamburgler-button.hamburgler-button__open & {
    opacity: 0;
  }
`
const BarThree = styled.div`
  ${hamburglerBarStyle}
  .hamburgler-button.hamburgler-button__open & {
    transform: translate(0, -11px) rotate(45deg);
  }
`

interface HamburglerButtonProps {
  open: boolean
  onClick: () => void
}

function HamburglerButton({ open, onClick }: HamburglerButtonProps) {
  return (
    <HamburglerButtonWrapper
      className={`hamburgler-button ${open ? 'hamburgler-button__open' : ''}`}
      onClick={onClick}
    >
      <BarOne />
      <BarTwo />
      <BarThree />
    </HamburglerButtonWrapper>
  )
}

export default function HeaderDiv(): JSX.Element {
  const [hamburglerOpen, setHamburglerOpen] = useState(false)

  const onHamburglerClick = useCallback(() => {
    setHamburglerOpen(!hamburglerOpen)
  }, [hamburglerOpen])

  return (
    <Header open={hamburglerOpen} className="header-nav">
      <HamburglerButton open={hamburglerOpen} onClick={onHamburglerClick} />
      <HeaderNavWrapper open={hamburglerOpen}>
        <GroupLinks>
          <StyledAnchorLink
            onClick={onHamburglerClick}
            href="#about"
            data-hover="about"
            offset={200}
          >
            About
          </StyledAnchorLink>
          <StyledAnchorLink
            onClick={onHamburglerClick}
            href="#projects"
            data-hover="projects"
            offset={200}
          >
            Projects
          </StyledAnchorLink>
          <StyledAnchorLink
            onClick={onHamburglerClick}
            href="#contact"
            data-hover="contact"
            offset={200}
          >
            Contact
          </StyledAnchorLink>
        </GroupLinks>
        <GroupIcons>
          <a href="https://www.linkedin.com/in/ellarrobinson/">
            <Icon variant={IconVariant.LinkedIn} />
          </a>
          <a href="EllaRobinson_CV.pdf">
            <Icon variant={IconVariant.PDF} />
          </a>
        </GroupIcons>
      </HeaderNavWrapper>
    </Header>
  )
}
