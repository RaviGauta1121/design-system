import * as tokens from './tokens';

export type Tokens = typeof tokens;
export default tokens;


// src/themes/tokens.ts
export const colors = {
  primary: '#0070f3',
  secondary: '#1c1c1e',
  background: '#ffffff',
  text: '#333333',
  error: '#ff4d4f',
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
};

export const radii = {
  sm: '4px',
  md: '8px',
  lg: '16px',
};

export const fontSizes = {
  sm: '12px',
  md: '16px',
  lg: '20px',
  xl: '24px',
};
