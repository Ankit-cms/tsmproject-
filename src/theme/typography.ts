const typography = {
  fontFamily: 'var(--font-almarai), sans-serif',
  h1: {
    fontSize: '1.75rem',
    '@media (min-width:600px)': {
      fontSize: '2.5rem',
    },
    '@media (min-width:900px)': {
      fontSize: '3rem',
    },
    '@media (min-width:1200px)': {
      fontSize: '3rem',
    },
    lineHeight: 1.2,
  },
  h2: {
    fontSize: '1.3rem',
    '@media (min-width:600px)': {
      fontSize: '2rem',
    },
    '@media (min-width:900px)': {
      fontSize: '2.5rem',
    },
    '@media (min-width:1200px)': {
      fontSize: '2.5rem',
    },
    lineHeight: 1.3,
  },
  h3: {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.625rem',
    },
    '@media (min-width:900px)': {
      fontSize: '1.75rem',
    },
    '@media (min-width:1200px)': {
      fontSize: '1.75rem',
    },
    lineHeight: 1.4,
  },
  h4: {
    fontSize: '1.25rem',
    '@media (min-width:600px)': {
      fontSize: '1.375rem',
    },
    '@media (min-width:900px)': {
      fontSize: '1.5rem',
    },
    '@media (min-width:1200px)': {
      fontSize: '1.5rem',
    },
    lineHeight: 1.4,
  },
  h5: {
    fontSize: '1.125rem',
    '@media (min-width:600px)': {
      fontSize: '1.1875rem',
    },
    '@media (min-width:900px)': {
      fontSize: '1.375rem',
    },
    '@media (min-width:1200px)': {
      fontSize: '1.375rem',
    },
    lineHeight: 1.5,
  },
  h6: {
    fontSize: '0.875rem',
    '@media (min-width:600px)': {
      fontSize: '1.0625rem',
    },
    '@media (min-width:900px)': {
      fontSize: '1.125rem',
    },
    '@media (min-width:1200px)': {
      fontSize: '1.25rem',
    },
    lineHeight: 1.5,
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.43,
  },
  button: {
    textTransform: 'none' as const,
    fontWeight: 500,
  },
};

export default typography;