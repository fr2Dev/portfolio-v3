import { useState } from 'react';
import { defaultTheme, lightTheme, darkTheme } from '../style/theme';
import { Theme } from '../definitions/types';

const useTheme = () => {
  const [theme, setTheme] = useState(defaultTheme);
  const updateTheme = (theme: Theme) => {
    switch (theme) {
      case 'dark':
        setTheme(darkTheme);
        break;

      case 'light':
        setTheme(lightTheme);
        break;

      default:
        setTheme(defaultTheme);
        break;
    }
  };
  return { theme, updateTheme };
};

export default useTheme;
