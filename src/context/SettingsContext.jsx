import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTheme } from './ThemeContext';

// eslint-disable-next-line react-refresh/only-export-components
export const ACCENT_COLORS = {
  cyan: {
    id: 'cyan',
    name: 'Cyber Cyan',
    hex: '#06b6d4',
    secondaryHex: '#0891b2',
    gradient: 'from-cyan-400 via-indigo-500 to-indigo-600',
    swatch: '#06b6d4',
    border: 'border-cyan-500',
    text: 'text-cyan-500'
  },
  indigo: {
    id: 'indigo',
    name: 'Deep Indigo',
    hex: '#6366f1',
    secondaryHex: '#4f46e5',
    gradient: 'from-indigo-400 via-indigo-600 to-violet-600',
    swatch: '#6366f1',
    border: 'border-indigo-500',
    text: 'text-indigo-500'
  },
  emerald: {
    id: 'emerald',
    name: 'Neon Emerald',
    hex: '#10b981',
    secondaryHex: '#059669',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    swatch: '#10b981',
    border: 'border-emerald-500',
    text: 'text-emerald-500'
  },
  violet: {
    id: 'violet',
    name: 'Electric Violet',
    hex: '#8b5cf6',
    secondaryHex: '#7c3aed',
    gradient: 'from-violet-400 via-purple-500 to-indigo-600',
    swatch: '#8b5cf6',
    border: 'border-violet-500',
    text: 'text-violet-500'
  },
  rose: {
    id: 'rose',
    name: 'Crimson Sentinel',
    hex: '#f43f5e',
    secondaryHex: '#e11d48',
    gradient: 'from-rose-400 via-pink-500 to-purple-600',
    swatch: '#f43f5e',
    border: 'border-rose-500',
    text: 'text-rose-500'
  },
  amber: {
    id: 'amber',
    name: 'Solar Warning',
    hex: '#f59e0b',
    secondaryHex: '#d97706',
    gradient: 'from-amber-400 via-orange-500 to-rose-600',
    swatch: '#f59e0b',
    border: 'border-amber-500',
    text: 'text-amber-500'
  }
};

const SettingsContext = createContext({
  direction: 'ltr',
  setDirection: () => {},
  toggleDirection: () => {},
  accentColor: 'cyan',
  setAccentColor: () => {},
  resetDefaults: () => {},
  isSettingsOpen: false,
  setIsSettingsOpen: () => {}
});

export const SettingsProvider = ({ children }) => {
  const { setTheme } = useTheme();

  // 1. Layout Direction State (LTR / RTL)
  const [direction, setDirectionState] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedDir = localStorage.getItem('nexai-direction');
      if (storedDir === 'ltr' || storedDir === 'rtl') {
        return storedDir;
      }
    }
    return 'ltr';
  });

  // 2. Primary Accent Color State
  const [accentColor, setAccentColorState] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedAccent = localStorage.getItem('nexai-accent');
      if (storedAccent && ACCENT_COLORS[storedAccent]) {
        return storedAccent;
      }
    }
    return 'cyan';
  });

  // 3. Settings Drawer Open / Closed State
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Sync Direction to <html> element
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('dir', direction);
    root.dir = direction;
    localStorage.setItem('nexai-direction', direction);
  }, [direction]);

  // Sync Accent Color to CSS Custom Variables
  useEffect(() => {
    const root = document.documentElement;
    const selected = ACCENT_COLORS[accentColor] || ACCENT_COLORS.cyan;
    root.style.setProperty('--color-primary', selected.hex);
    root.style.setProperty('--color-primary-hover', selected.secondaryHex);
    root.style.setProperty('--brand-accent', selected.hex);
    localStorage.setItem('nexai-accent', accentColor);
  }, [accentColor]);

  const setDirection = (newDir) => {
    if (newDir === 'ltr' || newDir === 'rtl') {
      setDirectionState(newDir);
    }
  };

  const toggleDirection = () => {
    setDirectionState(prev => (prev === 'ltr' ? 'rtl' : 'ltr'));
  };

  const setAccentColor = (colorKey) => {
    if (ACCENT_COLORS[colorKey]) {
      setAccentColorState(colorKey);
    }
  };

  const resetDefaults = () => {
    setTheme('dark');
    setDirectionState('ltr');
    setAccentColorState('cyan');
    localStorage.setItem('nexai-theme', 'dark');
    localStorage.setItem('nexai-direction', 'ltr');
    localStorage.setItem('nexai-accent', 'cyan');
  };

  return (
    <SettingsContext.Provider
      value={{
        direction,
        setDirection,
        toggleDirection,
        accentColor,
        setAccentColor,
        resetDefaults,
        isSettingsOpen,
        setIsSettingsOpen
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

export default SettingsContext;
