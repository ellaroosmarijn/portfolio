import styled from '@emotion/styled'
import { FaFilePdf } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

export enum IconVariant {
  PDF,
  LinkedIn,
  GitHubIcon,
}

interface IconProps {
  variant: IconVariant
}
export default function Icon({ variant }: IconProps) {
  switch (variant) {
    case IconVariant.PDF:
      return <PdfIcon />
    case IconVariant.LinkedIn:
      return <LinkedInIcon />
    case IconVariant.GitHubIcon:
      return <GitHubIcon />
    default:
      return <span>NO ICON</span>
  }
}

const iconStyles = `
  display: block;
  height: 100%;
  width: 100%;
  background: transparent;
  color: white;
`

export const LinkedInIcon = styled(FaLinkedin)`
  ${iconStyles}
`

export const PdfIcon = styled(FaFilePdf)`
  ${iconStyles}
`

export const GitHubIcon = styled(FaGithub)`
  ${iconStyles}
`
