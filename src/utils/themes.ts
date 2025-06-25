import { Theme } from '../types';

// Helper function to generate lighter gradient backgrounds from primary color
const generateGradientBackground = (primary: string, secondary: string): string => {
  // Convert hex to RGB for lighter variations
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const rgb = hexToRgb(primary);
  if (!rgb) return `linear-gradient(135deg, ${secondary} 0%, #ffffff 100%)`;

  // Create lighter variations
  const lighter1 = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.05)`;
  const lighter2 = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)`;
  
  return `linear-gradient(135deg, ${lighter1} 0%, ${lighter2} 50%, ${secondary} 100%)`;
};

export const themes: Theme[] = [
  {
    id: 'classic-rose',
    name: 'Classic Rose',
    primary: '#e11d48',
    secondary: '#fdf2f8',
    accent: '#be185d',
    background: 'linear-gradient(135deg, rgba(225, 29, 72, 0.05) 0%, rgba(225, 29, 72, 0.1) 50%, #fdf2f8 100%)',
    text: '#4a4a4a',
    'text-inverse': '#ffffff',
    'button-text': '#ffffff',
    cardBg: '#ffffff',
    isGradient: true
  },
  {
    id: 'beige-elegance',
    name: 'Beige Elegance',
    primary: '#d4a574',
    secondary: '#f5f5dc',
    accent: '#8b7355',
    background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.05) 0%, rgba(212, 165, 116, 0.1) 50%, #f5f5dc 100%)',
    text: '#2d2d2d',
    'text-inverse': '#ffffff',
    'button-text': '#ffffff',
    cardBg: '#ffffff',
    isGradient: true
  },
  {
    id: 'royal-purple',
    name: 'Royal Purple',
    primary: '#7c3aed',
    secondary: '#f3e8ff',
    accent: '#5b21b6',
    background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0.1) 50%, #f3e8ff 100%)',
    text: '#374151',
    'text-inverse': '#ffffff',
    'button-text': '#ffffff',
    cardBg: '#ffffff',
    isGradient: true
  },
  {
    id: 'emerald-dream',
    name: 'Emerald Dream',
    primary: '#059669',
    secondary: '#ecfdf5',
    accent: '#047857',
    background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.05) 0%, rgba(5, 150, 105, 0.1) 50%, #ecfdf5 100%)',
    text: '#374151',
    'text-inverse': '#ffffff',
    'button-text': '#ffffff',
    cardBg: '#ffffff',
    isGradient: true
  },
  {
    id: 'sunset-gold',
    name: 'Sunset Gold',
    primary: '#f59e0b',
    secondary: '#fffbeb',
    accent: '#d97706',
    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(245, 158, 11, 0.1) 50%, #fffbeb 100%)',
    text: '#374151',
    'text-inverse': '#ffffff',
    'button-text': '#ffffff',
    cardBg: '#ffffff',
    isGradient: true
  },
  {
    id: 'ocean-blue',
    name: 'Ocean Blue',
    primary: '#0ea5e9',
    secondary: '#f0f9ff',
    accent: '#0284c7',
    background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.05) 0%, rgba(14, 165, 233, 0.1) 50%, #f0f9ff 100%)',
    text: '#374151',
    'text-inverse': '#ffffff',
    'button-text': '#ffffff',
    cardBg: '#ffffff',
    isGradient: true
  },
  {
    id: 'blush-pink',
    name: 'Blush Pink',
    primary: '#ec4899',
    secondary: '#fdf2f8',
    accent: '#db2777',
    background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.05) 0%, rgba(236, 72, 153, 0.1) 50%, #fdf2f8 100%)',
    text: '#374151',
    'text-inverse': '#ffffff',
    'button-text': '#ffffff',
    cardBg: '#ffffff',
    isGradient: true
  },
  {
    id: 'sage-green',
    name: 'Sage Green',
    primary: '#84cc16',
    secondary: '#f7fee7',
    accent: '#65a30d',
    background: 'linear-gradient(135deg, rgba(132, 204, 22, 0.05) 0%, rgba(132, 204, 22, 0.1) 50%, #f7fee7 100%)',
    text: '#374151',
    'text-inverse': '#ffffff',
    'button-text': '#ffffff',
    cardBg: '#ffffff',
    isGradient: true
  },
  {
    id: 'lavender-mist',
    name: 'Lavender Mist',
    primary: '#a855f7',
    secondary: '#faf5ff',
    accent: '#9333ea',
    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(168, 85, 247, 0.1) 50%, #faf5ff 100%)',
    text: '#374151',
    'text-inverse': '#ffffff',
    'button-text': '#ffffff',
    cardBg: '#ffffff',
    isGradient: true
  },
  {
    id: 'coral-reef',
    name: 'Coral Reef',
    primary: '#f97316',
    secondary: '#fff7ed',
    accent: '#ea580c',
    background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05) 0%, rgba(249, 115, 22, 0.1) 50%, #fff7ed 100%)',
    text: '#374151',
    'text-inverse': '#ffffff',
    'button-text': '#ffffff',
    cardBg: '#ffffff',
    isGradient: true
  },
  {
    id: 'midnight-navy',
    name: 'Midnight Navy',
    primary: '#1e40af',
    secondary: '#eff6ff',
    accent: '#1d4ed8',
    background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.05) 0%, rgba(30, 64, 175, 0.1) 50%, #eff6ff 100%)',
    text: '#374151',
    'text-inverse': '#ffffff',
    'button-text': '#ffffff',
    cardBg: '#ffffff',
    isGradient: true
  },
  {
    id: 'champagne-gold',
    name: 'Champagne Gold',
    primary: '#eab308',
    secondary: '#fefce8',
    accent: '#ca8a04',
    background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.05) 0%, rgba(234, 179, 8, 0.1) 50%, #fefce8 100%)',
    text: '#374151',
    'text-inverse': '#ffffff',
    'button-text': '#ffffff',
    cardBg: '#ffffff',
    isGradient: true
  },
  {
    id: 'dusty-rose',
    name: 'Dusty Rose',
    primary: '#f43f5e',
    secondary: '#fff1f2',
    accent: '#e11d48',
    background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.05) 0%, rgba(244, 63, 94, 0.1) 50%, #fff1f2 100%)',
    text: '#374151',
    'text-inverse': '#ffffff',
    'button-text': '#ffffff',
    cardBg: '#ffffff',
    isGradient: true
  },
  {
    id: 'forest-green',
    name: 'Forest Green',
    primary: '#16a34a',
    secondary: '#f0fdf4',
    accent: '#15803d',
    background: 'linear-gradient(135deg, rgba(22, 163, 74, 0.05) 0%, rgba(22, 163, 74, 0.1) 50%, #f0fdf4 100%)',
    text: '#374151',
    'text-inverse': '#ffffff',
    'button-text': '#ffffff',
    cardBg: '#ffffff',
    isGradient: true
  },
  {
    id: 'vintage-burgundy',
    name: 'Vintage Burgundy',
    primary: '#991b1b',
    secondary: '#fef2f2',
    accent: '#7f1d1d',
    background: 'linear-gradient(135deg, rgba(153, 27, 27, 0.05) 0%, rgba(153, 27, 27, 0.1) 50%, #fef2f2 100%)',
    text: '#374151',
    'text-inverse': '#ffffff',
    'button-text': '#ffffff',
    cardBg: '#ffffff',
    isGradient: true
  }
];

export const getThemeById = (id: string): Theme => {
  return themes.find(theme => theme.id === id) || themes[0];
};

export const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  
  // Set CSS variables for Tailwind to use
  root.style.setProperty('--color-primary', theme.primary);
  root.style.setProperty('--color-secondary', theme.secondary);
  root.style.setProperty('--color-accent', theme.accent);
  root.style.setProperty('--color-text', theme.text);
  root.style.setProperty('--color-text-inverse', theme['text-inverse'] || '#ffffff');
  root.style.setProperty('--color-button-text', theme['button-text'] || '#ffffff');
  root.style.setProperty('--color-card-bg', theme.cardBg);
  
  // Always use gradient backgrounds now
  root.style.setProperty('--color-background', theme.background);
  document.body.style.background = theme.background;
  document.body.style.backgroundColor = 'transparent'; // Let gradient take precedence
};