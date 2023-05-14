import AboveTitleText from './AboveTitleText'
import BaseTitle from './BaseTitle'
import BelowTitleText from './BelowTitleText'
import ContentBoxHeading from './ContentBoxHeading'
import HideMobile from './HideMobile'

export default function ProjectHeading() {
  return (
    <ContentBoxHeading>
      <AboveTitleText>A FEW</AboveTitleText>
      <BaseTitle>PROJECTS</BaseTitle>
      <BelowTitleText>
        THE BEST WORKS BEGIN IN THE DEVELOPERS HEARTFELT CARE AND PASSION FOR
        TECHNOLOGY, BUT TO BRING ABOUT MEANINGFUL CHANGE THEY MUST CHANNEL IT
        INTO IMPROVING PEOPLE&apos;S LIVES THROUGH ACCESSIBILITY AND EFFICIENCY.
        <HideMobile>
          {' '}
          ONCE THIS OCCURS, POSITIVE RESULTS ARE INEVITABLE.
        </HideMobile>
      </BelowTitleText>
    </ContentBoxHeading>
  )
}
