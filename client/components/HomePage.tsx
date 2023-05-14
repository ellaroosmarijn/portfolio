import styled from '@emotion/styled'

import AboveTitleText from './AboveTitleText'
import BaseTitle from './BaseTitle'
import ContentBox, { ContentBoxVariant } from './ContentBox'
import BelowTitleText from './BelowTitleText'

const Title = styled(BaseTitle)`
    font-size: 12.5rem;

    @media (max-width: 1150px) {
      font-size: 10rem;
    }
    @media (max-width: 907px) {
      font-size: 7.5rem;
    }
    @media (max-width: 677px) {
      font-size: 5.5rem;
    }
    @media (max-width: 530px) {
      font-size: 3.5rem;
    }
  }
`

export default function HomePage() {
  return (
    <>
      <ContentBox variant={ContentBoxVariant.Dark}>
        <AboveTitleText>I AM</AboveTitleText>
        <Title>ELLA ROOSMARIJN</Title>
        <BelowTitleText>
          A GRADUATE SOFTWARE DEVELOPER LOOKING TO HAVE AN OUTSIZED IMPACT ON
          THE WORLD. INTERESTED IN POLITICS, PHILOSOPHY, ECONOMICS, AND BUILDING
          CREATIVE THINGS.
        </BelowTitleText>
      </ContentBox>
    </>
  )
}
