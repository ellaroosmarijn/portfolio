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
      styles: (theme) => ({
        root: {
          position: 'fixed',
          perspective: '1000px',
          backgroundColor: 'transparent',
          mixBlendMode: 'difference',
          padding: theme.spacing.xl,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottom: 'none',
          '& a[data-hover]:before': {
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
          '& a[data-hover]': {
            textTransform: 'uppercase',
            position: 'relative',
            display: 'inline-block',
            padding: 0,
            transition: 'transform 0.3s',
            transformOrigin: '50% 0',
            transformStyle: 'preserve-3d',
          },
          '& a[data-hover]:hover': {
            transform: 'rotateX(90deg) translateY(-22px)',
          },
          '& a:not([data-hover])': {
            transition: 'opacity 0.3s',
          },
          '& a:not([data-hover]):hover': {
            opacity: '0.5',
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
    Grid: {
      styles: () => ({
        root: {
          justifyContent: 'center',
        },
      }),
    },
    Button: {
      styles: () => ({
        root: {
          backgroundColor: 'transparent',
          color: 'white',
          borderRadius: '0',
        },
      }),
    },
    TextInput: {
      styles: () => ({
        root: {
          textAlign: 'left',
        },
        label: {
          color: 'black',
          fontWeight: 600,
        },
        required: {
          color: 'black',
        },
        input: {
          borderRadius: 0,
          backgroundColor: 'black',
        },
      }),
    },
    Textarea: {
      styles: () => ({
        root: {
          textAlign: 'left',
          minHeight: '10rem',
        },
        label: {
          color: 'black',
          fontWeight: 600,
        },
        required: {
          color: 'black',
        },
        input: {
          borderRadius: 0,
          backgroundColor: 'black',
        },
      }),
    },
    ThemeIcon: {
      styles: () => ({
        root: {
          color: 'white',
          background: 'transparent',
          '& svg': {
            height: '100%',
          },
        },
      }),
    },
  },

  globalStyles: (theme) => ({
    'html, body': {
      ...theme.fn.fontStyles(),
      backgroundColor: theme.black,
      color: theme.white,
    },
  }),
}

export default myTheme
