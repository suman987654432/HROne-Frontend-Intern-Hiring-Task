import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: {
      background: isDark ? '#1a1a1a' : '#ffffff',
      secondary: isDark ? '#2d2d2d' : '#fafafa',
      border: isDark ? '#404040' : '#ddd',
      text: isDark ? '#ffffff' : '#000000',
      card: isDark ? '#2d2d2d' : '#ffffff',
      input: isDark ? '#404040' : '#ffffff',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
