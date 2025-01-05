import { useState, useRef, useEffect } from 'react';

function getInitialTheme() {
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return storedTheme === 'dark' || prefersDark;
}

function useThemeToggle() {
  const inputRef = useRef(null);
  const [isDark, setIsDark] = useState(getInitialTheme());

  useEffect(() => {
    const themeController = inputRef.current;
    if (themeController) {
      themeController.checked = isDark;
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
  }, [isDark]);

  const handleChange = () => setIsDark(inputRef.current.checked);

  return { isDark, inputRef, handleChange };
}

export default useThemeToggle;
