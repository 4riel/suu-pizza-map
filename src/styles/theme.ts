export const theme = {
  colors: {
    primary: '#d73027',
    primaryHover: '#b8251f',
    primaryLight: 'rgba(215, 48, 39, 0.1)',
    secondary: '#ff6b6b',
    secondaryLight: '#ff9f43',
    accent: '#ee5a24',
    
    text: {
      primary: '#2c3e50',
      secondary: '#555',
      light: '#666',
      white: '#ffffff',
    },
    
    background: {
      primary: '#ffffff',
      secondary: '#f8f9fa',
      tertiary: '#e9ecef',
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 50%, #ff9f43 100%)',
      gradientLight: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    },
    
    border: {
      light: '#e9ecef',
      medium: 'rgba(0, 0, 0, 0.1)',
      primary: '#d73027',
    },
    
    shadow: {
      sm: '0 2px 8px rgba(0, 0, 0, 0.1)',
      md: '0 4px 15px rgba(0, 0, 0, 0.15)',
      lg: '0 10px 30px rgba(0, 0, 0, 0.2)',
      xl: '0 20px 40px rgba(0, 0, 0, 0.25)',
    },
    
    overlay: 'rgba(0, 0, 0, 0.6)',
    navBackground: 'rgba(255, 255, 255, 0.95)',
  },
  
  typography: {
      fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    heading: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
    
    sizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '2rem',    // 32px
      '4xl': '2.5rem',  // 40px
      '5xl': '3rem',    // 48px
      '6xl': '3.5rem',  // 56px
    },
    
    weights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    
    lineHeights: {
      tight: 1.1,
      normal: 1.5,
      relaxed: 1.6,
      loose: 1.8,
    },
  },
  
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '6rem',   // 96px
    '5xl': '8rem',   // 128px
  },
  
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '20px',
    '3xl': '25px',
    full: '50px',
    circle: '50%',
  },
  
  transitions: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
    bounce: '0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  zIndex: {
    dropdown: 100,
    modal: 1000,
    nav: 1100,
    tooltip: 1200,
  },
} as const

export type Theme = typeof theme 