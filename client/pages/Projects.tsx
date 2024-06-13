import styled from '@emotion/styled'

import ContentBox_, { ContentBoxVariant } from '../components/ContentBox'
import BrainPicture from '../assets/brain.jpg'
import BallerinaPicture from '../assets/ballerina.jpg'
import LetMeInPicture from '../assets/LetMeIn.jpg'
import ExternalLinkPicture from '../assets/external-link.png'
import tracksuitLogo from '../assets/tracksuitLogo.png'
import bookReviews from '../assets/bookReviews.png'
import HideMobile from '../components/HideMobile'
import ContentBoxHeading from '../components/ContentBoxHeading'
import AboveTitleText from '../components/AboveTitleText'
import BaseTitle from '../components/BaseTitle'
import BelowTitleText from '../components/BelowTitleText'
import { TechList, TechListItem, TechLists } from '../components/TechList'

const Title = styled.div`
  font-size: 8vw;
  white-space: nowrap;
  font-family: 'Vina Sans';
  margin-top: -0.1em;
  padding-bottom: 0.1em;
  font-weight: 500;
  line-height: 0.75;
  text-transform: uppercase;
`

const SubtitleBold = styled.div`
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 800;
`

const SubtitleLight = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  paddig-top: -0.1em;
  text-transform: uppercase;
`

const Project = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  padding: 0 2rem;
`

const ProjectRow = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  max-width: 30rem;
  text-align: justify;
`

const Divider = styled.div`
  width: 50%;
  height: 0.5px;
  background-color: #ffffff;
  margin: 8px 0;
`

const Image = styled.img`
  filter: invert(100%) contrast(1.5);
  object-fit: contain;
  max-width: 20rem;
  width: 80vw;
`

const ContentBox = styled(ContentBox_)`
  gap: 30vw;
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

const ComingSoon = styled.span`
  color: inherit;
  font-size: 1rem;
  opacity: 0.5;
  text-decoration: underline;
  cursor: not-allowed;
`

export default function Projects() {
  return (
    <ContentBox variant={ContentBoxVariant.Dark} id="projects">
      <ContentBoxHeading>
        <AboveTitleText>RECENT</AboveTitleText>
        <BaseTitle vwPercent={20}>PROJECTS</BaseTitle>
        <BelowTitleText>
          I began the following projects during my time at Dev Academy Aotearoa.
          One is a personal project using ChatGPT, and the other is a group
          project with an emphasis on peer programming and agile ceremonies.
        </BelowTitleText>
      </ContentBoxHeading>
      <Project>
        <ProjectRow>
          <Image src={bookReviews} alt="online-library" />
        </ProjectRow>
        <ProjectRow>
          <SubtitleBold>Solo project</SubtitleBold>
          <Title>Ink & Pages</Title>
          <ProjectLinks>
            <ProjectLink href="">Visit</ProjectLink>
            <ProjectLink href="">Code</ProjectLink>
          </ProjectLinks>
          <SubtitleLight>
            Ink & Pages is a book review website that allows users to create,
            read, update, and delete their reviews. As a project to strengthen
            my fundamentals, I built this full-stack web application from
            scratch using the basics.
            <p />
            <HideMobile>
              This project reinforced my understanding of core web technologies
              and helped me gain hands-on experience with server-side processing
              and data storage.
            </HideMobile>
          </SubtitleLight>
          <Divider />
          <SubtitleBold>BUILT USING</SubtitleBold>
          <TechLists>
            <TechList align={'right'}>
              <TechListItem>JavaScript</TechListItem>
            </TechList>
            <TechList align={'left'}>
              <TechListItem>Postgresql</TechListItem>
            </TechList>
            <TechList align={'center'}>
              <TechListItem>Node</TechListItem>
            </TechList>
          </TechLists>
        </ProjectRow>
      </Project>
      {/*  */}
      <Project>
        <ProjectRow>
          <Image src={bookReviews} alt="online-library" />
        </ProjectRow>
        <ProjectRow>
          <SubtitleBold>TEAM PROJECT</SubtitleBold>
          <Title>TRACKSUIT MARKETING WEBSITE</Title>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ProjectLink href="https://www.gotracksuit.com/us">
              Visit
            </ProjectLink>
          </div>
          <SubtitleLight>
            Tracksuit's marketing website serves as a platform to showcase the
            company's values, product, and share insightful blog posts about
            branding and marketing.
            <p />
            <HideMobile>
              As a key developer, I played a crucial role in creating the
              website. I was responsible for building the About Page, Product
              Page, Blog (including blog posts, articles, tools, and templates),
              Header, Footer, and call-to-action elements. Additionally, I
              contributed to the development of components for the Home and
              Contact pages.
            </HideMobile>
          </SubtitleLight>
          <Divider />
          <SubtitleBold>BUILT USING</SubtitleBold>
          <TechLists>
            <TechList align={'right'}>
              <TechListItem>TYPESCRIPT</TechListItem>
              <TechListItem>HUBSPOT</TechListItem>
              <TechListItem>CSS</TechListItem>
            </TechList>
            <TechList align={'left'}>
              <TechListItem>SANITY CMS</TechListItem>
              <TechListItem>REACT</TechListItem>
            </TechList>
          </TechLists>
        </ProjectRow>
      </Project>
      <Project>
        <ProjectRow>
          <Image src={BrainPicture} alt="two minds one" />
        </ProjectRow>
        <ProjectRow>
          <SubtitleBold>SOLO PROJECT</SubtitleBold>
          <Title>TWO MINDS ONE</Title>
          <ProjectLinks>
            <ComingSoon>Coming soon</ComingSoon>
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
              AN ENVIRONMENT WHERE PEOPLE CAN ENGAGE IN MEANINGFUL DIALOGUE AND
              FIND COMMON GROUND DESPITE THEIR POLITICAL DIFFERENCES.
            </HideMobile>
          </SubtitleLight>
          <Divider />
          <SubtitleBold>BUILT USING</SubtitleBold>
          <TechLists>
            <TechList align={'right'}>
              <TechListItem>TYPESCRIPT</TechListItem>
              <TechListItem>MANTINE</TechListItem>
              <TechListItem>THUNKS</TechListItem>
              <TechListItem>REACT</TechListItem>
            </TechList>
            <TechList align={'left'}>
              <TechListItem>INSOMNIA</TechListItem>
              <TechListItem>EXPRESS</TechListItem>
              <TechListItem>CHATGPT</TechListItem>
              <TechListItem>REDUX</TechListItem>
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
            <ComingSoon>Coming Soon</ComingSoon>
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
            <TechList align={'right'}>
              <TechListItem>TAILWIND CSS</TechListItem>
              <TechListItem>RESTFULAPI</TechListItem>
              <TechListItem>EXPRESS</TechListItem>
              <TechListItem>REDUX</TechListItem>
              <TechListItem>KNEX</TechListItem>
            </TechList>
            <TechList align={'left'}>
              <TechListItem>DBDIAGRAM.IO</TechListItem>
              <TechListItem>TYPESCRIPT</TechListItem>
              <TechListItem>SQLITE 3</TechListItem>
              <TechListItem>THUNKS</TechListItem>
              <TechListItem>REACT</TechListItem>
            </TechList>
          </TechLists>
        </ProjectRow>
      </Project>
      <Project>
        <ProjectRow>
          <Image src={LetMeInPicture} alt="LetMeIn" />
        </ProjectRow>
        <ProjectRow>
          <SubtitleBold>GROUP PROJECT</SubtitleBold>
          <Title>LET ME IN</Title>
          <ProjectLinks>
            <ComingSoon>Coming Soon</ComingSoon>
            <ProjectLink href="https://github.com/ellaroosmarijn/Let-Me-In">
              Code
            </ProjectLink>
          </ProjectLinks>
          <SubtitleLight>
            Let Me In is a teacher-led group project developed during Dev
            Academy Aotearoa&apos;s bootcamp. This interactive game provides
            participants with a random meme, specifically designed to be shared
            with one&apos;s teachers when they are late to a Zoom meeting.
            <HideMobile>
              Once logged in users can add meme&apos;s and view the ones that
              they&apos;ve won.
            </HideMobile>
          </SubtitleLight>
          <Divider />
          <SubtitleBold>BUILT USING</SubtitleBold>
          <TechLists>
            <TechList align={'right'}>
              <TechListItem>EXPRESS</TechListItem>
              <TechListItem>AUTH0</TechListItem>
              <TechListItem>REACT</TechListItem>
              <TechListItem>KNEX</TechListItem>
            </TechList>
            <TechList align={'left'}>
              <TechListItem>TYPESCRIPT</TechListItem>
              <TechListItem>THUNKS</TechListItem>
              <TechListItem>REDUX</TechListItem>
              <TechListItem>JEST</TechListItem>
            </TechList>
          </TechLists>
        </ProjectRow>
      </Project>
    </ContentBox>
  )
}
