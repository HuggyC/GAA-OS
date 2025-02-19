import { useEffect, useState } from 'react';

export const useGAATheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Initialize theme
  }, []);

  return { theme, setTheme };
};