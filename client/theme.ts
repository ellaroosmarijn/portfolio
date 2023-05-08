import { MantineThemeOverride } from '@mantine/core'

const myTheme: MantineThemeOverride = {
  colorScheme: 'light',

  defaultRadius: 'md',

  loader: 'dots',

  cursorType: 'pointer',

  respectReducedMotion: true,

  white: '#ffffff',
  black: '#000000',

  fontFamily: 'Work Sans, sans-serif',

  headings: {
    fontFamily: 'Vina Sans, sans-serif',
    sizes: {
      h1: {
        fontSize: '12.5rem',
      },
      h2: {
        fontSize: '12rem',
      },
      h3: {
        fontSize: '6rem',
      },
    },
  },

  fontSizes: {
    xxs: '0.75rem',
    xs: '1rem',
    sm: '1.25rem',
    md: '2rem',
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

  components: {
    Header: {
      styles: () => ({
        root: {
          position: 'fixed',
          perspective: '1000px',
          backgroundColor: 'transparent',
          borderBottom: 'none',
          '& a:before': {
            content: 'attr(data-hover)',
            textTransform: 'uppercase',
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            height: '100%',
            transition: 'color 0.3s',
            transform: 'rotateX(-90deg)',
            transformOrigin: '50% 0',
            textAlign: 'center',
          },
          '& a': {
            height: '1.5rem',
            textTransform: 'uppercase',
            position: 'relative',
            display: 'inline-block',
            padding: 0,
            transition: 'transform 0.3s',
            transformOrigin: '50% 0',
            transformStyle: 'preserve-3d',
          },
          '& a:hover': {
            transform: 'rotateX(90deg) translateY(-22px)',
          },
        },
      }),
    },
    Title: {
      styles: () => ({
        root: {
          marginTop: '-0.1em',
          paddingBottom: '0.1em',
          fontWeight: 500,
          lineHeight: 0.75,
        },
      }),
    },
    Button: {
      defaultProps: { radius: 'md', loaderPosition: 'center' },
      styles: (theme) => ({
        root: {
          textAlign: 'center',
          marginRight: theme.spacing.md,
          borderWidth: '0px',
          fontWeight: 600,
          backgroundColor: theme.black,
          '&:hover': { backgroundColor: 'transparent' },
          color: theme.white,
        },
      }),
    },
  },

  globalStyles: (theme) => ({
    html: {
      filter: 'sepia(100%) saturate(60%)',
    },
    'html, body': {
      ...theme.fn.fontStyles(),
      backgroundColor: theme.black,
      color: theme.white,
    },
  }),
}

export default myTheme
