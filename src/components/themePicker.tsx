import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ISettings } from '../definitions/interfaces';
import { Theme } from '../definitions/types';
import { capitalize } from '../helpers/utilities';
import { RadioButton } from './';
import { Setting } from './styled';

const themes = ['default', 'dark', 'light'];

const ThemePicker = (props: ISettings) => {
  const { t } = useTranslation();
  const { updateTheme } = props;
  const initialTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'default';

  const [activeTheme, setActiveTheme] = useState(initialTheme);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value as Theme;
    setActiveTheme(value);
    updateTheme(value);
  };

  return (
    <>
      {themes.map((theme, i) => (
        <Setting $nested key={i.toString()}>
          <RadioButton
            value={theme}
            name="theme"
            label={t(capitalize(theme))}
            onChange={handleChange}
            checked={activeTheme === theme}
          />
        </Setting>
      ))}
    </>
  );
};

export default ThemePicker;
