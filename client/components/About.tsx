import { Container, Text, Title } from '@mantine/core'

import ContentBox, { ContentBoxVariant } from './ContentBox'

export default function About() {
  return (
    <>
      <ContentBox variant={ContentBoxVariant.Light}>
        <Container
          id="about"
          style={{
            maxWidth: '800px',
          }}
        >
          <Text fz="sm" fw="700">
            ELLA ROOSMARIJN
          </Text>
          <Title order={2}>ABOUT ME</Title>
          <Text fz="xs" fw="600">
            KIA ORA! I&apos;M A KIWI SOFTWARE DEVELOPER PASSIONATE ABOUT MAKING
            A POSITIVE IMPACT THROUGH TECHNOLOGY. MY FOCUS IS ON IMPROVING
            ACCESSIBILITY AND EFFICIENCY. I BELIEVE THAT CARING FOR OTHERS AND
            PUTTING PASSION INTO OUR WORK LEADS TO POSITIVE RESULTS. IN MY SPARE
            TIME, I&apos;M WORKING ON A PROJECT THAT AIMS TO BRIDGE THE GAP
            BETWEEN MINDS AS A PLATFORM FOR PRACTISING EMPATHY AND CONFLICT
            MINIMISATION. I&apos;M ALSO COLLABORATING WITH MY DEV ACADEMY PEERS
            ON A CODING PROJECT. OUTSIDE OF TECH, I ENJOY SCUBA DIVING, READING,
            AND PONDERING THE WORLD.
          </Text>
        </Container>
      </ContentBox>
    </>
  )
}
