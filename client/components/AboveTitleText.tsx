import styled from '@emotion/styled'
import { BREAKPOINTS } from '../../shared/constants'

const AboveTitleText = styled.div`
  font-size: 1.25rem;
  font-weight: 700;

  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: 1rem;
  }
`
export default AboveTitleText
