export const theme = {
  colors: {
    background: '#07111f',
    backgroundAlt: '#0c1728',
    surface: 'rgba(15, 23, 42, 0.76)',
    surfaceSolid: '#111827',
    primary: '#7c3aed',
    primaryLight: '#a78bfa',
    secondary: '#22d3ee',
    text: '#f8fafc',
    mutedText: '#94a3b8',
    border: 'rgba(148, 163, 184, 0.18)',
    success: '#34d399',
    shadow: 'rgba(0, 0, 0, 0.28)',
  },
  fonts: {
    body: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  spacing: {
    section: '6rem',
    container: '1120px',
  },
  radii: {
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    full: '999px',
  },
  breakpoints: {
    tablet: '768px',
    desktop: '1024px',
  },
} as const;

export type AppTheme = typeof theme;
