import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { useHotkeys, useLocalStorage } from '@mantine/hooks'

import myTheme from '../theme'
import HomePage from './HomePage'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Header from './Header'

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  useHotkeys([['mod+J', () => toggleColorScheme()]])

  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ ...myTheme, colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Header />
          <Notifications />
          <HomePage />
          <About />
          <Projects />
          <Contact />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

export default App
