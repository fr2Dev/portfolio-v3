import React, { useState } from 'react';
import { Theme } from '../definitions/types';

interface ThemePickerProps {
  updateTheme: (value: Theme) => void;
}

const ThemePicker = (props: ThemePickerProps) => {
  const { updateTheme } = props;
  const [activeTheme, setActiveTheme] = useState('default');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value as Theme;
    setActiveTheme(value);
    updateTheme(value);
  };
  return (
    <div>
      <div>
        <input
          type="radio"
          id="default"
          name="theme"
          onChange={handleChange}
          value="default"
          checked={activeTheme === 'default'}
        />
        <label htmlFor="default">Default</label>
      </div>

      <div>
        <input
          type="radio"
          id="dark"
          name="theme"
          onChange={handleChange}
          value="dark"
          checked={activeTheme === 'dark'}
        />
        <label htmlFor="dark">Dark</label>
      </div>

      <div>
        <input
          type="radio"
          id="light"
          name="theme"
          onChange={handleChange}
          value="light"
          checked={activeTheme === 'light'}
        />
        <label htmlFor="light">Light</label>
      </div>
    </div>
  );
};

export default ThemePicker;
