import Hero from './Hero'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Header from './Header'
import { useState } from 'react'
import styled from '@emotion/styled'
import LoadingOverlay from './LoadingOverlay'

function useFontsLoading() {
  const [loading, setLoaded] = useState(true)
  document.fonts.ready
    .then(() => {
      setTimeout(() => {
        setLoaded(false)
      }, 1000)
    })
    .catch(console.error)
  return loading
}

interface AppWrapperProps {
  isLoading: boolean
}
const AppWrapper = styled.div<AppWrapperProps>`
  visibility: ${({ isLoading }) => (isLoading ? 'hidden' : 'visible')};
`

function App() {
  const loading = useFontsLoading()
  return (
    <>
      {loading && <LoadingOverlay />}
      <AppWrapper isLoading={loading}>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </AppWrapper>
    </>
  )
}

export default App
