import { useState, useEffect } from 'react';

export const useDarkMode = (mode) => {

  const [theme, setTheme] = useState(mode);
  const switchTheme = (theme === 'light') ? 'dark' : 'light';

  useEffect(() => {
    const root  = window.document.documentElement;
    root.classList.remove(switchTheme);
    root.classList.add(theme);

  }, [theme, switchTheme]);

  return {switchTheme, setTheme};
};
