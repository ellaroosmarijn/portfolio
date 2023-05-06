import { Container, Text, Title } from '@mantine/core'

import HeroBox from './HeroBox'

export default function HomePage() {
  return (
    <>
      <HeroBox>
        <Container
          style={{
            maxWidth: '1150px',
          }}
        >
          <Text fz="sm" fw="700">
            I AM
          </Text>
          <Title order={1}>ELLA ROOSMARIJN</Title>
          <Text fz="xs" fw="600">
            A GRADUATE SOFTWARE DEVELOPER LOOKING TO HAVE AN OUTSIZED IMPACT ON
            THE WORLD. INTERESTED IN POLITICS, PHILOSOPHY, ECONOMICS, AND
            BUILDING COOL SHIT.
          </Text>
        </Container>
      </HeroBox>
    </>
  )
}
