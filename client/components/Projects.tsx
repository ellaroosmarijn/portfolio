import { Container, Grid, Text, Image, Title } from '@mantine/core'

import ContentBox from './ContentBox'

export default function Projects() {
  return (
    <>
      <ContentBox>
        <Container
          style={{
            maxWidth: '800px',
            maxHeight: '1200px',
          }}
        >
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
        <Grid>
          <Grid.Col span={5}>
            <Container>
              <Image
                maw={240}
                mx="auto"
                radius="md"
                src="../../server/public/twoMindsOne.png"
                alt="two minds one"
              />
            </Container>
          </Grid.Col>
          <Grid.Col span={5}>
            <Container>
              <Text fz="xxs" fw="700" ta="center">
                SOLO PROJECT
              </Text>
              <Title order={3}>TWO MINDS ONE</Title>
              <Text fz="xxs" fw="600" ta="center">
                TWO MINDS ONE IS A PLATFORM FOR RECONNECTING PEOPLE DIVIDED BY
                POLITICS. IT PROVIDES A SAFE SPACE FOR INDIVIDUALS TO PRACTICE
                UNDERSTANDING THE OPPOSITION, FOSTERING EMPATHY AND DEEPER
                COMPREHENSION. BY BRIDGING THE GAP BETWEEN MINDS, TWO MINDS ONE
                SEEKS TO CREATE AN ENVIRONMENT WHERE PEOPLE CAN ENGAGE IN
                MEANINGFUL DIALOGUE AND FIND COMMON GROUND DESPITE THEIR
                POLITICAL DIFFERENCES.
              </Text>
            </Container>
          </Grid.Col>
          <Grid.Col span={5}>
            <Container>
              <Text fz="xxs" fw="700" ta="center">
                GROUP PROJECT
              </Text>
              <Title order={3}>GALLERINA</Title>
              <Text fz="xxs" fw="600" ta="center">
                GALLERINA IS A USER-FRIENDLY ART CURATION WEBSITE SIMILAR TO
                PINTEREST, ALLOWING USERS TO SCROLL THROUGH AND SAVE ARTWORKS TO
                THEIR COLLECTIONS. LOGGED-IN USERS CAN ADD AND MANAGE THEIR
                COLLECTED PAINTINGS WITH EASE.
              </Text>
            </Container>
          </Grid.Col>
          <Grid.Col span={5}>
            <Container>
              <Image
                maw={240}
                mx="auto"
                radius="md"
                src="../../server/public/gallerina.png"
                alt="gallerina"
              />
            </Container>
          </Grid.Col>
        </Grid>
      </ContentBox>
    </>
  )
}
