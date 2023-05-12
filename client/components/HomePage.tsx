import { Container, Text, Title } from '@mantine/core'

import BigTitle from './BigTitle'
import ContentBox from './ContentBox'

export default function HomePage() {
  return (
    <>
      <ContentBox>
        <Container
          sx={(theme) => ({
            maxWidth: '1150px',
            [`@media (max-width: ${theme.breakpoints.xs})`]: {
              paddingLeft: '0',
              paddingRight: '0',
            },
          })}
        >
          <Text fz="sm" fw="700">
            I AM
          </Text>
          <BigTitle order={1}>ELLA ROOSMARIJN</BigTitle>
          <Text fz="xs" fw="600" sx={() => ({ whiteSpace: 'pre-line' })}>
            A GRADUATE SOFTWARE DEVELOPER LOOKING TO HAVE AN OUTSIZED IMPACT ON
            THE WORLD. INTERESTED IN POLITICS, PHILOSOPHY, ECONOMICS, AND
            BUILDING CREATIVE THINGS.
          </Text>
        </Container>
      </ContentBox>
    </>
  )
}
