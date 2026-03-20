import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material';

// ─── Dracula Palette ──────────────────────────────────────────────────────────
const dracula = {
  background: '#282a36',
  currentLine: '#44475a',
  selection: '#44475a',
  foreground: '#f8f8f2',
  comment: '#6272a4',
  purple: '#bd93f9',
  pink: '#ff79c6',
  cyan: '#8be9fd',
  green: '#50fa7b',
  yellow: '#f1fa8c',
  orange: '#ffb86c',
  red: '#ff5555',
};

// ─── Theme Factory ────────────────────────────────────────────────────────────
export const buildTheme = (mode: PaletteMode) => {
  const isDark = mode === 'dark';

  let theme = createTheme({
    palette: {
      mode,
      primary: {
        main: dracula.purple,
        contrastText: isDark ? dracula.background : '#ffffff',
      },
      secondary: {
        main: dracula.pink,
      },
      background: {
        default: isDark ? dracula.background : '#f8f8f2',
        paper: isDark ? dracula.currentLine : '#ffffff',
      },
      text: {
        primary: isDark ? dracula.foreground : dracula.background,
        secondary: isDark ? dracula.comment : '#555770',
      },
      info: { main: dracula.cyan },
      success: { main: dracula.green },
      warning: { main: dracula.orange },
      error: { main: dracula.red },
      divider: isDark ? 'rgba(98,114,164,0.25)' : 'rgba(40,42,54,0.12)',
    },
    typography: {
      fontFamily: '"Inter", "system-ui", sans-serif',
      h1: { fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.2 },
      h2: { fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1.3 },
      h3: { fontWeight: 700, lineHeight: 1.4 },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 500 },
      body1: { fontWeight: 400, lineHeight: 1.7 },
      body2: { fontWeight: 400, lineHeight: 1.6 },
      button: { textTransform: 'none', fontWeight: 700 },
    },
    shape: { borderRadius: 14 },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition: 'background-color 0.3s ease, color 0.3s ease',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            padding: '10px 26px',
            borderRadius: 10,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: `0 8px 20px rgba(189,147,249,0.35)`,
            },
            '&:active': { transform: 'scale(0.97)' },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            transition: 'box-shadow 0.3s ease',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: `0 20px 40px rgba(189,147,249,0.2)`,
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  });

  theme = responsiveFontSizes(theme);
  return theme;
};

export default buildTheme('dark');
