import { Text } from '@mantine/core'

import ContrastContentBox from './ContrastContentBox'

export default function About() {
  return (
    <>
      <ContrastContentBox>
        <Text fz="sm" fw="700">
          Kia ora! 👋 I&apos;m Ella, a kiwi exploring the world of tech as a
          software developer. I recently discovered my passion for programming
          through teaching myself PostgreSQL. Finding that I couldn&apos;t get
          enough and wanted to learn more I became a student at Dev Academy,
          where I spent over 800 hours doing something I love.
        </Text>
        <Text fz="sm" fw="700">
          With a primary focus on improving people&apos;s lives, accessibility
          and efficiency, I am constantly striving to make an impact. I believe
          that positive results are inevitable when we put care and passion for
          others into the things we do. I&apos;ve chosen software development as
          the place to make my mark because not only am I passionate, but the
          world is becoming increasingly reliant on technology in day to day
          life, and has become an essential tool for businesses, governments and
          individuals to function effectively.
        </Text>
        <Text fz="sm" fw="700">
          Outside of this I have started a personal project that consumes most
          of my spare time. It aims to bridge the gap between minds as a
          platform for practising empathy and conflict minimisation. I am also
          working on another project with a couple of my peers from Dev Academy
          so that we can continue practising effective teamwork and coding. In
          the remainder of my spare time I scuba dive, aim to read a book per
          week and wonder about the world 🌎 📚
        </Text>
      </ContrastContentBox>
    </>
  )
}
