import { MantineThemeOverride } from '@mantine/core'

const myTheme: MantineThemeOverride = {
  colorScheme: 'light',

  defaultRadius: 'md',

  loader: 'dots',

  cursorType: 'pointer',

  respectReducedMotion: true,

  white: '#ffffff',
  black: '#000000',

  fontFamily: 'Inter, sans-serif',

  fontSizes: {
    xs: '1rem',
    sm: '2rem',
    md: '3rem',
    lg: '5rem',
    xl: '12rem',
  },

  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },

  colors: {
    yellow: [
      '#fffbf5',
      '#ffe0b3',
      '#ffcc80',
      '#ffb84d',
      '#ffa31a',
      '#e68a00',
      '#b36b00',
      '#804c00',
      '#4d2e00',
      '#1a0f00',
    ],
  },

  primaryColor: 'yellow',

  components: {
    Button: {
      defaultProps: { color: 'dark', radius: 'md', loaderPosition: 'center' },
      styles: (theme) => ({
        root: {
          textAlign: 'center',
          marginRight: theme.spacing.md,
          borderWidth: '0px',
          fontWeight: 600,
        },
      }),
    },
  },

  globalStyles: (theme) => ({
    'html, body': {
      ...theme.fn.fontStyles(),
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.yellow[9]
          : theme.colors.yellow[0],
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.yellow[0]
          : theme.colors.yellow[9],
    },
  }),
}

export default myTheme
