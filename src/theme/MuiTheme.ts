import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material';
import { brand } from './brandColors';

// ─── Theme Factory ────────────────────────────────────────────────────────────
export const buildTheme = (mode: PaletteMode) => {
  const isDark = mode === 'dark';

  let theme = createTheme({
    palette: {
      mode,
      primary: {
        main: brand.gold,
        contrastText: isDark ? brand.ink : '#1a1816',
      },
      secondary: {
        main: brand.rose,
      },
      background: {
        default: isDark ? brand.ink : '#f5f1ea',
        paper: isDark ? brand.paper : '#ffffff',
      },
      text: {
        primary: isDark ? brand.cream : '#1a1816',
        secondary: isDark ? brand.muted : '#5c564d',
      },
      info: { main: brand.mist },
      success: { main: brand.sage },
      warning: { main: brand.amber },
      error: { main: '#c45c5c' },
      divider: isDark ? 'rgba(154, 146, 136, 0.18)' : 'rgba(26, 24, 22, 0.12)',
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
              boxShadow: `0 8px 20px rgba(201, 168, 108, 0.35)`,
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
              boxShadow: `0 20px 40px rgba(201, 168, 108, 0.18)`,
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
