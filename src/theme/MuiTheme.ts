import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2DD4BF', // Teal/Cyan accent
      contrastText: '#0F172A', // for buttons on primary
    },
    secondary: {
      main: '#6366F1', // Slightly muted purple accent for headings & highlights
    },
    background: {
      default: '#0F172A', // Deep slate blue-black
      paper: '#1E293B', // slightly lighter for cards/papers
    },
    text: {
      primary: '#F8FAFC', // main text
      secondary: '#94A3B8', // muted text
      disabled: '#6B7280', // subtle disabled color
    },
    info: {
      main: '#22D3EE', // subtle info color for highlights
    },
  },
  typography: {
    fontFamily: '"Inter", "system-ui", sans-serif',
    h1: { fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.2 },
    h2: { fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1.3 },
    h3: { fontWeight: 700, lineHeight: 1.4 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 500 },
    subtitle1: { fontWeight: 500, color: '#94A3B8' },
    subtitle2: { fontWeight: 400, color: '#94A3B8' },
    body1: { fontWeight: 400, lineHeight: 1.6 },
    body2: { fontWeight: 400, lineHeight: 1.5, color: '#CBD5E1' },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  shape: {
    borderRadius: 14, // slightly more rounded
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '12px 28px',
          borderRadius: 12,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 20px rgba(45, 212, 191, 0.3)',
          },
        },
        containedPrimary: {
          color: '#0F172A',
          '&:active': {
            transform: 'scale(0.97)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 20px 40px rgba(45, 212, 191, 0.12)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 40px rgba(45, 212, 191, 0.2)',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          transition: 'color 0.3s ease',
        },
      },
    },
  },
});

// Makes fonts responsive for mobile automatically
theme = responsiveFontSizes(theme);

export default theme;
