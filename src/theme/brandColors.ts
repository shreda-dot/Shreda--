/**
 * Editorial “warm noir” palette — champagne gold, dusty rose, muted sage & mist.
 * Centralizes accents so the UI stays cohesive (replaces neon Dracula / AI styling).
 */
export const brand = {
  gold: '#c9a86c',
  rose: '#a67c7c',
  mist: '#8a9ba8',
  sage: '#6b8f7a',
  ink: '#141210',
  paper: '#1f1d1a',
  paperElevated: '#2a2622',
  cream: '#f2ebe0',
  muted: '#9a9288',
  amber: '#c9a574',
  coral: '#c17f59',
} as const;

/** RGB channels for `rgba(...)` strings in sx / inline styles */
export const brandRgb = {
  gold: '201, 168, 108',
  rose: '166, 124, 124',
  mist: '138, 155, 168',
  sage: '107, 143, 122',
} as const;

export type BrandRgbKey = keyof typeof brandRgb;

export const alpha = (channel: BrandRgbKey, opacity: number) =>
  `rgba(${brandRgb[channel]}, ${opacity})`;
