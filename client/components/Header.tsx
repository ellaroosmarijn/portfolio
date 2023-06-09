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
  font-size: 1.25rem;
  margin-top: 1rem;
  position: fixed;
  width: 100%;
  mix-blend-mode: difference;
  z-index: 1;
  @media (max-width: ${BREAKPOINTS.md}) {
    box-sizing: border-box;
    margin-top: 0;
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
    transform: rotateX(-90deg);
    transform-origin: 50% 0;
    text-align: center;
    display: block;
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
    gap: 0.25rem;
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
  align-items: center;
  gap: 1rem;
  right: 1.5rem;
  height: 1.5rem;

  // fix ios auto sizing bug
  & a {
    width: 20px !important;
    height: 20px !important;
  }

  ${hoverFadeStyle}

  @media (max-width: ${BREAKPOINTS.md}) {
    position: relative;
    right: 0;
    gap: 10rem;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    gap: 5rem;
  }
`

export const StyledAnchorLink = styled(AnchorLink)`
  color: inherit;
  font-weight: 600;
  text-decoration: none;

  @media (max-width: ${BREAKPOINTS.md}) {
    font-weight: 700;
  }
`

export const HamburglerButtonWrapper = styled.div`
  position: absolute;
  right: 1.5rem;
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
  transition: 0.3s;
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
          >
            About
          </StyledAnchorLink>
          <StyledAnchorLink
            onClick={onHamburglerClick}
            href="#projects"
            data-hover="projects"
          >
            Projects
          </StyledAnchorLink>
          <StyledAnchorLink
            onClick={onHamburglerClick}
            href="#contact"
            data-hover="contact"
          >
            Contact
          </StyledAnchorLink>
        </GroupLinks>
        <GroupIcons>
          <a href="https://github.com/ellaroosmarijn/portfolio">
            <Icon variant={IconVariant.GitHubIcon} />
          </a>
          <a href="https://www.linkedin.com/in/ellarrobinson/">
            <Icon variant={IconVariant.LinkedIn} />
          </a>
          <a href="/Ella_CV.pdf">
            <Icon variant={IconVariant.PDF} />
          </a>
        </GroupIcons>
      </HeaderNavWrapper>
    </Header>
  )
}
