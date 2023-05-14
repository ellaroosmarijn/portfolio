import styled from '@emotion/styled'

import ContentBox_, { ContentBoxVariant } from './ContentBox'
import BrainPicture from '../assets/brain.jpg'
import BallerinaPicture from '../assets/ballerina.jpg'
import ExternalLinkPicture from '../assets/external-link.png'
import HideMobile from './HideMobile'
import Icon, { IconVariant } from './Icon'
import ProjectHeading from './ProjectHeading'
import { BREAKPOINTS } from '../../shared/constants'

const Container = styled.div`
  padding: 0 10rem;
`

const Title = styled.div`
  font-size: 8vw;
  white-space: nowrap;
  font-family: 'Vina Sans';
  margin-top: -0.1em;
  padding-bottom: 0.1em;
  font-weight: 500;
  line-height: 0.75;
`

const SubtitleBold = styled.div`
  font-size: 0.75rem;
  font-weight: 800;
`

const SubtitleLight = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  paddig-top: -0.1em;
`

const Project = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  padding-top: 5rem;
`

const ProjectRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  max-width: 30rem;
`

const Divider = styled.div`
  width: 50%;
  height: 0.5px;
  background-color: #ffffff;
  margin: 8px 0;
`

const Image = styled.img`
  filter: invert(100%);
  object-fit: contain;
  height: 100%;
  display: inline-block;
  width: 20rem;
`

const ContentBox = styled(ContentBox_)`
  gap: 4rem;
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 4rem;
`
const ProjectLink = styled.a`
  color: inherit;
  font-size: 1rem;
  opacity: 0.75;

  &:after {
    content: '';
    background-image: url(${ExternalLinkPicture});
    width: 1rem;
    height: 1rem;
    margin-left: 0.2rem;
    display: inline-block;
    filter: invert(100%);
    background-size: contain;
  }
`

const TechLists = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  align-items: start;
`
const TechList = styled.ul`
  font-size: 0.75rem;
  font-weight: 600;
  padding-top: -0.1em;
  width: 50%;
`
const TechListItem = styled.li`
  font-size: 0.75rem;
  font-weight: 600;
`

export default function Projects() {
  return (
    <Container>
      <ContentBox variant={ContentBoxVariant.Dark} id="projects">
        <ProjectHeading />
        <Project>
          <ProjectRow>
            <Image src={BrainPicture} alt="two minds one" />
          </ProjectRow>
          <ProjectRow>
            <SubtitleBold>SOLO PROJECT</SubtitleBold>
            <Title>TWO MINDS ONE</Title>
            <ProjectLinks>
              <ProjectLink href="#">Visit</ProjectLink>
              <ProjectLink href="https://github.com/ellaroosmarijn/two-minds-one">
                Code
              </ProjectLink>
            </ProjectLinks>
            <SubtitleLight>
              TWO MINDS ONE IS A PLATFORM FOR RECONNECTING PEOPLE DIVIDED BY
              POLITICS. IT PROVIDES A SAFE SPACE FOR INDIVIDUALS TO PRACTICE
              UNDERSTANDING THE OPPOSITION, FOSTERING EMPATHY AND DEEPER
              COMPREHENSION.
              <p />
              <HideMobile>
                {' '}
                BY BRIDGING THE GAP BETWEEN MINDS, TWO MINDS ONE SEEKS TO CREATE
                AN ENVIRONMENT WHERE PEOPLE CAN ENGAGE IN MEANINGFUL DIALOGUE
                AND FIND COMMON GROUND DESPITE THEIR POLITICAL DIFFERENCES.
              </HideMobile>
            </SubtitleLight>
            <Divider />
            <SubtitleBold>BUILT USING</SubtitleBold>
            <TechLists>
              <TechList>
                <TechListItem>TYPESCRIPT</TechListItem>
                <TechListItem>REACT</TechListItem>
                <TechListItem>REDUX</TechListItem>
                <TechListItem>THUNKS</TechListItem>
              </TechList>
              <TechList>
                <TechListItem>CHATGPT API</TechListItem>
                <TechListItem>EXPRESS-SESSIONS</TechListItem>
                <TechListItem>MANTINE COMPONENT LIBRARY</TechListItem>
              </TechList>
            </TechLists>
          </ProjectRow>
        </Project>
        <Project>
          <ProjectRow>
            <Image src={BallerinaPicture} alt="gallerina" />
          </ProjectRow>

          <ProjectRow>
            <SubtitleBold>GROUP PROJECT</SubtitleBold>
            <Title>GALLERINA</Title>
            <ProjectLinks>
              <ProjectLink href="#">Visit</ProjectLink>
              <ProjectLink href="https://github.com/tohora-2023/Gallerina">
                Code
              </ProjectLink>
            </ProjectLinks>
            <SubtitleLight>
              GALLERINA IS AN ART CURATION WEBSITE, SIMILAR TO PINTEREST, WHERE
              USERS CAN EXPLORE AND SAVE ARTWORK TO THEIR COLLECTIONS. LOGGED-IN
              USERS CAN EASILY ADD AND MANAGE THEIR COLLECTED PAINTINGS.
            </SubtitleLight>
            <Divider />
            <SubtitleBold>BUILT USING</SubtitleBold>
            <TechLists>
              <TechList>
                <TechListItem>TYPESCRIPT</TechListItem>
                <TechListItem>REACT</TechListItem>
                <TechListItem>REDUX</TechListItem>
                <TechListItem>THUNKS</TechListItem>
              </TechList>
              <TechList>
                <TechListItem>SQLITE 3</TechListItem>
                <TechListItem>RESTFULAPI</TechListItem>
                <TechListItem>TAILWIND CSS</TechListItem>
              </TechList>
            </TechLists>
          </ProjectRow>
        </Project>
      </ContentBox>
    </Container>
  )
}
