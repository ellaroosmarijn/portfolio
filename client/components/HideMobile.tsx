import styled from '@emotion/styled'
import { BREAKPOINTS } from '../../shared/constants'

const HideMobile = styled.span`
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`
export default HideMobile
