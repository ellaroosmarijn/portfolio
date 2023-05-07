import { Routes, Route } from 'react-router-dom'
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  AppShell,
} from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { useHotkeys, useLocalStorage } from '@mantine/hooks'

import myTheme from '../theme'
import HomePage from './HomePage'
import Header from './Header'
import Projects from './Projects'
import About from './About'

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
          <AppShell fixed header={<Header />}>
            <Notifications />
            <HomePage />
            {/* <About /> */}
            <Projects />
          </AppShell>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

export default App
