import AboveTitleText from './AboveTitleText'
import BaseTitle from './BaseTitle'
import ContentBox, { ContentBoxVariant } from './ContentBox'
import BelowTitleText from './BelowTitleText'
import HideMobile from './HideMobile'

export default function HomePage() {
  return (
    <>
      <ContentBox variant={ContentBoxVariant.Dark}>
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
      </ContentBox>
    </>
  )
}
