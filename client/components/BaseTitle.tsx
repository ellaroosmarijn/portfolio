import styled from '@emotion/styled'
import { BREAKPOINTS } from '../../shared/constants'

interface BaseTitleProps {
  vwPercent?: number
  mobileSizeMultiplier?: number
}

const BaseTitle = styled.div<BaseTitleProps>`
  height: 0.73em;
  line-height: 0.55;
  margin-bottom: 0.3rem;
  overflow: hidden;
  font-size: ${({ vwPercent }) => `${vwPercent || 15}vw`};
  font-family: Vina Sans, sans-serif;
  font-weight: 500;
  white-space: nowrap;

  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: ${({ vwPercent, mobileSizeMultiplier }) =>
      `${(vwPercent || 15) * (mobileSizeMultiplier || 1.5)}vw`};
  }
`

export default BaseTitle
