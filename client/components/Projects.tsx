import {
  Container,
  Grid,
  Text,
  Image,
  Title,
  Divider,
  ThemeIcon,
} from '@mantine/core'
import { GoMarkGithub } from 'react-icons/go'

import ContentBox from './ContentBox'
import TwoMindsOnePicture from '../assets/twoMindsOne.png'
import GallerinaPicture from '../assets/gallerina.png'

export default function Projects() {
  const iconStyle = {
    color: 'white',
  }

  return (
    <>
      <ContentBox>
        <Container id="projects">
          <Text fz="sm" fw="700">
            ELLA ROOSMARIJN
          </Text>
          <Title order={2}>PROJECTS</Title>
          <Text fz="xs" fw="600" ta="center">
            THE BEST WORKS BEGIN IN THE DEVELOPERS HEARTFELT CARE AND PASSION
            FOR TECHNOLOGY, BUT TO BRING ABOUT MEANINGFUL CHANGE THEY MUST
            CHANNEL IT INTO IMPROVING PEOPLE&apos;S LIVES THROUGH ACCESSIBILITY
            AND EFFICIENCY. ONCE THIS OCCURS, POSITIVE RESULTS ARE INEVITABLE.
          </Text>
        </Container>
        <Grid py="2em">
          <Grid.Col my="lg" span={5}>
            <Image
              maw={540}
              mx="auto"
              radius="md"
              src={TwoMindsOnePicture}
              alt="two minds one"
            />
          </Grid.Col>
          <Grid.Col my="lg" span={5}>
            <Text fz="xxs" fw="800" ta="center">
              SOLO PROJECT
            </Text>
            <Title order={3}>TWO MINDS ONE</Title>
            <Text fz="xxs" fw="600" ta="center">
              TWO MINDS ONE IS A PLATFORM FOR RECONNECTING PEOPLE DIVIDED BY
              POLITICS. IT PROVIDES A SAFE SPACE FOR INDIVIDUALS TO PRACTICE
              UNDERSTANDING THE OPPOSITION, FOSTERING EMPATHY AND DEEPER
              COMPREHENSION. BY BRIDGING THE GAP BETWEEN MINDS, TWO MINDS ONE
              SEEKS TO CREATE AN ENVIRONMENT WHERE PEOPLE CAN ENGAGE IN
              MEANINGFUL DIALOGUE AND FIND COMMON GROUND DESPITE THEIR POLITICAL
              DIFFERENCES.
            </Text>
            <Divider my="sm" />
            <Text fz="xxs" fw="800" ta="center">
              BUILT USING
            </Text>
            <Text fz="xxs" fw="600" ta="center">
              REACT, REDUX, THUNKS, TYPESCRIPT, SQLITE 3, CHATGPT API,
              EXPRESS-SESSIONS, MANTINE COMPONENT LIBRARY.
            </Text>
            <a href="https://github.com/ellaroosmarijn/two-minds-one">
              <ThemeIcon variant="light">
                <GoMarkGithub style={iconStyle} />
              </ThemeIcon>
            </a>
          </Grid.Col>
          <Grid.Col my="lg" span={5}>
            <Text fz="xxs" fw="800" ta="center">
              GROUP PROJECT
            </Text>
            <Title order={3}>GALLERINA</Title>
            <Text fz="xxs" fw="600" ta="center">
              GALLERINA IS A USER-FRIENDLY ART CURATION WEBSITE SIMILAR TO
              PINTEREST, ALLOWING USERS TO EXPLORE DIFFERENT ARTWORKS AND SAVE
              THEM TO THEIR COLLECTIONS. LOGGED-IN USERS CAN ADD AND MANAGE
              THEIR COLLECTED PAINTINGS WITH EASE.
            </Text>
            <Divider my="sm" />
            <Text fz="xxs" fw="800" ta="center">
              BUILT USING
            </Text>
            <Text fz="xxs" fw="600" ta="center">
              REACT, REDUX, THUNKS, TYPESCRIPT, SQLITE 3, RESTFULAPI, TAILWIND
              CSS.
            </Text>
            <a href="https://github.com/tohora-2023/Gallerina">
              <ThemeIcon variant="light">
                <GoMarkGithub style={iconStyle} />
              </ThemeIcon>
            </a>
          </Grid.Col>
          <Grid.Col my="lg" span={5}>
            <Image
              maw={540}
              mx="auto"
              radius="md"
              src={GallerinaPicture}
              alt="gallerina"
            />
          </Grid.Col>
        </Grid>
      </ContentBox>
    </>
  )
}
