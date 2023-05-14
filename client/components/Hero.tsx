import AboveTitleText from './AboveTitleText'
import BaseTitle from './BaseTitle'
import ContentBox, { ContentBoxVariant } from './ContentBox'
import BelowTitleText from './BelowTitleText'
import HideMobile from './HideMobile'
import ContentBoxHeading from './ContentBoxHeading'

export default function Hero() {
  return (
    <ContentBox variant={ContentBoxVariant.Dark}>
      <ContentBoxHeading>
        <AboveTitleText>I AM</AboveTitleText>
        <BaseTitle>ELLA ROOSMARIJN</BaseTitle>
        <BelowTitleText>
          A GRADUATE SOFTWARE DEVELOPER LOOKING TO HAVE AN OUTSIZED IMPACT ON
          THE WORLD.
          <HideMobile>
            {' '}
            INTERESTED IN POLITICS, PHILOSOPHY, ECONOMICS, AND BUILDING CREATIVE
            THINGS.
          </HideMobile>
        </BelowTitleText>
      </ContentBoxHeading>
    </ContentBox>
  )
}
