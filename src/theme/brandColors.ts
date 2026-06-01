/**
 * High-contrast graphite palette with acid, coral, cyan, and leaf accents.
 * Centralizes accents so the UI feels intentional instead of template-generated.
 */
export const brand = {
  gold: '#b7ff2a',
  rose: '#ff4d5e',
  mist: '#00d4ff',
  sage: '#42f59b',
  ink: '#070908',
  paper: '#111614',
  paperElevated: '#19211d',
  cream: '#f3f7ea',
  muted: '#95a69c',
  amber: '#ffb000',
  coral: '#ff7a1a',
} as const;

/** RGB channels for `rgba(...)` strings in sx / inline styles */
export const brandRgb = {
  gold: '183, 255, 42',
  rose: '255, 77, 94',
  mist: '0, 212, 255',
  sage: '66, 245, 155',
} as const;

export type BrandRgbKey = keyof typeof brandRgb;

export const alpha = (channel: BrandRgbKey, opacity: number) =>
  `rgba(${brandRgb[channel]}, ${opacity})`;
