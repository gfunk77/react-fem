import { useState, useEffect } from 'react';

export const usePreferredTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkTheme ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return [theme, toggleTheme];
};

export default usePreferredTheme;
