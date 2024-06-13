import ContentBox, { ContentBoxVariant } from '../components/ContentBox'
import BaseTitle from '../components/BaseTitle'
import AboveTitleText from '../components/AboveTitleText'
import BelowTitleText from '../components/BelowTitleText'
import ContentBoxHeading from '../components/ContentBoxHeading'
import styled from '@emotion/styled'
import { BREAKPOINTS } from '../../shared/constants'
import {
  TechList as TechList_,
  TechListItem,
  TechLists,
} from '../components/TechList'

const SubTitle = styled(AboveTitleText)`
  font-size: 1rem;
  margin-top: 1rem;

  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: 0.75rem;
  }
`
const ContentWrapper = styled.div`
  margin-top: 2rem;

  @media (max-width: ${BREAKPOINTS.md}) {
    margin-top: 1rem;
  }
`
const TechList = styled(TechList_)`
  font-size: inherit;

  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: 0.75rem;
  }
`

export default function About() {
  return (
    <>
      <ContentBox variant={ContentBoxVariant.Light} id="about">
        <ContentBoxHeading>
          <AboveTitleText>A LITTLE</AboveTitleText>
          <BaseTitle vwPercent={20}>ABOUT ME</BaseTitle>
          <BelowTitleText>
            A Politics and Philosophy grad who returned to study Software Dev.
            An avid reader and gardener who loves to scuba dive.
          </BelowTitleText>
          <ContentWrapper>
            <SubTitle>INTERESTED IN:</SubTitle>
            <BelowTitleText>
              Interested in improving social systems through innovative UX and
              tech.
            </BelowTitleText>
            <SubTitle>USING:</SubTitle>
            <TechLists>
              <TechList align={'right'}>
                <TechListItem>DBDIAGRAM.IO</TechListItem>
                <TechListItem>EMOTION CSS</TechListItem>
                <TechListItem>TYPESCRIPT</TechListItem>
                <TechListItem>JAVASCRIPT</TechListItem>
                <TechListItem>INSOMNIA</TechListItem>
                <TechListItem>EXPRESS</TechListItem>
                <TechListItem>THUNKS</TechListItem>
                <TechListItem>REACT</TechListItem>
                <TechListItem>CSS</TechListItem>
              </TechList>
              <TechList align={'left'}>
                <TechListItem>TAILWIND CSS</TechListItem>
                <TechListItem>POSTGRESQL</TechListItem>
                <TechListItem>RESTFULAPI</TechListItem>
                <TechListItem>SUPERTEST</TechListItem>
                <TechListItem>MANTINE</TechListItem>
                <TechListItem>SQLITE 3</TechListItem>
                <TechListItem>VS CODE</TechListItem>
                <TechListItem>REDUX</TechListItem>
                <TechListItem>JEST</TechListItem>
              </TechList>
            </TechLists>
          </ContentWrapper>
        </ContentBoxHeading>
      </ContentBox>
    </>
  )
}
