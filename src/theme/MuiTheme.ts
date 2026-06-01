import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material';
import { alpha, brand } from './brandColors';

// ─── Theme Factory ────────────────────────────────────────────────────────────
export const buildTheme = (mode: PaletteMode) => {
  const isDark = mode === 'dark';
  const palette = {
    primary: isDark ? brand.gold : '#2f6b00',
    secondary: isDark ? brand.rose : '#d72843',
    info: isDark ? brand.mist : '#007f9c',
    success: isDark ? brand.sage : '#138a57',
    warning: isDark ? brand.amber : '#a66800',
    defaultBg: isDark ? brand.ink : '#f6f8f0',
    paperBg: isDark ? brand.paper : '#ffffff',
    elevatedBg: isDark ? brand.paperElevated : '#eef4e7',
    textPrimary: isDark ? brand.cream : '#101610',
    textSecondary: isDark ? brand.muted : '#4d5c52',
    divider: isDark ? 'rgba(149, 166, 156, 0.2)' : 'rgba(16, 22, 16, 0.14)',
  };

  let theme = createTheme({
    palette: {
      mode,
      primary: {
        main: palette.primary,
        contrastText: isDark ? brand.ink : '#ffffff',
      },
      secondary: {
        main: palette.secondary,
      },
      background: {
        default: palette.defaultBg,
        paper: palette.paperBg,
      },
      text: {
        primary: palette.textPrimary,
        secondary: palette.textSecondary,
      },
      info: { main: palette.info },
      success: { main: palette.success },
      warning: { main: palette.warning },
      error: { main: '#c45c5c' },
      divider: palette.divider,
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
            background: isDark
              ? brand.ink
              : `radial-gradient(circle at 8% 15%, rgba(47, 107, 0, 0.12), transparent 32%),
                 radial-gradient(circle at 85% 8%, rgba(215, 40, 67, 0.1), transparent 26%),
                 ${palette.defaultBg}`,
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
              boxShadow: isDark
                ? `0 8px 20px ${alpha('gold', 0.32)}`
                : '0 8px 20px rgba(47, 107, 0, 0.2)',
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
              boxShadow: isDark
                ? `0 20px 40px ${alpha('gold', 0.14)}`
                : '0 20px 40px rgba(16, 22, 16, 0.12)',
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
