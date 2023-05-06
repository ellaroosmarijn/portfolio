import { Text } from '@mantine/core'

import HeroBox from './HeroBox'

export default function HomePage() {
  return (
    <>
      <HeroBox>
        <Text fz="sm" fw={700}>
          Welcome to
        </Text>
        <Text fz="xl" fw={700}>
          Ella&apos;s Portfolio
        </Text>
        <Text fz="sm" fw={700}>
          One girl&apos;s adventures in software development.
        </Text>
      </HeroBox>
    </>
  )
}
