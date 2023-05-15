import AboveTitleText from './AboveTitleText'
import BaseTitle from './BaseTitle'
import ContentBox_, { ContentBoxVariant } from './ContentBox'
import BelowTitleText_ from './BelowTitleText'
import ContentBoxHeading from './ContentBoxHeading'
import styled from '@emotion/styled'

const ContentBox = styled(ContentBox_)`
  padding: 10vw 0;
`

const BelowTitleText = styled(BelowTitleText_)`
  margin: 0 0.6rem;
`

export default function Hero() {
  return (
    <ContentBox variant={ContentBoxVariant.Dark}>
      <ContentBoxHeading>
        <AboveTitleText>I AM</AboveTitleText>
        <BaseTitle vwPercent={40}>ELLA</BaseTitle>
        <BaseTitle vwPercent={14.25}>ROOSMARIJN</BaseTitle>
        <BaseTitle vwPercent={18.4}>ROBINSON</BaseTitle>
        <BelowTitleText>
          A GRADUATE SOFTWARE DEVELOPER LOOKING TO HAVE AN OUTSIZED IMPACT ON
          THE WORLD.
        </BelowTitleText>
      </ContentBoxHeading>
    </ContentBox>
  )
}
