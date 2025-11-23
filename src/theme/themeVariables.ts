'use client';
// ==============================
// COLOR VARIABLES
// ==============================

// Primary Colors
export const PRIMARY_COLORS = {
  main: '#1976d2',
  light: '#42a5f5',
  dark: '#1565c0',
  contrastText: '#ffffff',
} as const;

// Secondary Colors
export const SECONDARY_COLORS = {
  main: '#dc004e',
  light: '#ff5983',
  dark: '#9a0036',
  contrastText: '#ffffff',
} as const;

// Neutral Colors
export const NEUTRAL_COLORS = {
  white: '#ffffff',
  black: '#000000',
  grey50: '#fafafa',
  grey100: '#f5f5f5',
  grey200: '#eeeeee',
  grey300: '#e0e0e0',
  grey400: '#bdbdbd',
  grey500: '#9e9e9e',
  grey600: '#757575',
  grey700: '#616161',
  grey800: '#424242',
  grey900: '#212121',
} as const;

// Semantic Colors
export const SEMANTIC_COLORS = {
  success: '#4caf50',
  warning: '#ff9800',
  error: '#f44336',
  info: '#2196f3',
} as const;

// Background Colors
export const BACKGROUND_COLORS = {
  default: NEUTRAL_COLORS.grey100,
  paper: NEUTRAL_COLORS.white,
} as const;

// Text Colors
export const TEXT_COLORS = {
  primary: NEUTRAL_COLORS.grey900,
  secondary: NEUTRAL_COLORS.grey700,
  disabled: NEUTRAL_COLORS.grey500,
} as const;

// ==============================
// TYPOGRAPHY VARIABLES
// ==============================

// Font Families
export const FONT_FAMILIES = {
  primary: '"Roboto", "Helvetica", "Arial", sans-serif',
  monospace: '"Roboto Mono", monospace',
  // You can add your custom fonts here
  geistSans: 'var(--font-geist-sans)',
  geistMono: 'var(--font-geist-mono)',
} as const;

// Font Sizes
export const FONT_SIZES = {
  xs: '0.75rem',   // 12px
  sm: '0.875rem',  // 14px
  md: '1rem',      // 16px
  lg: '1.125rem',  // 18px
  xl: '1.25rem',   // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '1.75rem', // 28px
  '4xl': '2rem',   // 32px
  '5xl': '2.5rem', // 40px
} as const;

// Font Weights
export const FONT_WEIGHTS = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
} as const;

// Line Heights
export const LINE_HEIGHTS = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.75,
} as const;

// ==============================
// SPACING VARIABLES
// ==============================

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
} as const;

// ==============================
// BORDER RADIUS VARIABLES
// ==============================

export const BORDER_RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  full: 9999,
} as const;

// ==============================
// SHADOW VARIABLES
// ==============================

export const SHADOWS = {
  sm: '0 1px 3px rgba(0,0,0,0.12)',
  md: '0 2px 4px rgba(0,0,0,0.1)',
  lg: '0 2px 8px rgba(0,0,0,0.1)',
  xl: '0 4px 8px rgba(0,0,0,0.15)',
  '2xl': '0 8px 16px rgba(0,0,0,0.2)',
} as const;

// ==============================
// BREAKPOINT VARIABLES
// ==============================

export const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
} as const;