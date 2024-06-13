import Hero from './components/Hero'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'
import { useState } from 'react'
import styled from '@emotion/styled'
import LoadingOverlay from './components/LoadingOverlay'

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
