import ContentBox, { ContentBoxVariant } from './ContentBox'
import BaseTitle from './BaseTitle'
import AboveTitleText from './AboveTitleText'
import BelowTitleText from './BelowTitleText'
import HideMobile from './HideMobile'

export default function About() {
  return (
    <>
      <ContentBox variant={ContentBoxVariant.Light} id="about">
        <AboveTitleText>SOMETHING</AboveTitleText>
        <BaseTitle>ABOUT ME</BaseTitle>
        <BelowTitleText>
          I&apos;M A PASSIONATE SOFTWARE DEVELOPER FOCUSED ON MAKING A POSITIVE
          IMPACT THROUGH IMPROVING ACCESSIBILITY AND EFFICIENCY. I BELIEVE THAT
          CARING FOR OTHERS AND PUTTING PASSION INTO YOUR WORK LEADS TO POSITIVE
          RESULTS.
          <HideMobile>
            {' '}
            IN MY SPARE TIME, I&apos;M WORKING ON A PROJECT TO BRIDGE THE GAP
            BETWEEN MINDS, FOSTERING EMPATHY AND CONFLICT MINIMIZATION. BEYOND
            TECH, I ENJOY SCUBA DIVING, READING, AND CONTEMPLATING THE WORLD.
          </HideMobile>
        </BelowTitleText>
      </ContentBox>
    </>
  )
}
