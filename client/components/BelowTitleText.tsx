import styled from '@emotion/styled'
import { BREAKPOINTS } from '../../shared/constants'

const BelowTitleText = styled.div`
  font-size: 1rem;
  font-weight: 600;
  line-height: 0.9;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  text-align: justify;

  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: 0.75rem;
  }
`

export default BelowTitleText
