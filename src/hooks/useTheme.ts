import { useState, useEffect } from 'react';
import { defaultTheme, lightTheme, darkTheme } from '../style/theme';
import { Theme } from '../definitions/types';

const useTheme = () => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    if (localStorage.length > 0 && localStorage.getItem('theme')) {
      const localTheme = localStorage.getItem('theme');
      updateTheme(localTheme as Theme);
    } else {
      updateTheme('default');
    }
  }, []);

  const updateTheme = (theme: Theme) => {
    switch (theme) {
      case 'dark':
        localStorage.setItem('theme', 'dark');
        setTheme(darkTheme);
        break;

      case 'light':
        localStorage.setItem('theme', 'light');
        setTheme(lightTheme);
        break;

      default:
        localStorage.setItem('theme', 'default');
        setTheme(defaultTheme);
        break;
    }
  };
  return { theme, updateTheme };
};

export default useTheme;
