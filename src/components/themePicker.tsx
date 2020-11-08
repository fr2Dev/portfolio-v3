import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ISettings } from '../definitions/interfaces';
import { Theme } from '../definitions/types';
import { Setting } from './styled';

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
      <Setting>
        <input
          type="radio"
          id="default"
          name="theme"
          onChange={handleChange}
          value="default"
          checked={activeTheme === 'default'}
        />
        <label htmlFor="default">{t('Default')}</label>
      </Setting>
      <Setting>
        <input
          type="radio"
          id="dark"
          name="theme"
          onChange={handleChange}
          value="dark"
          checked={activeTheme === 'dark'}
        />
        <label htmlFor="dark">{t('Dark')}</label>
      </Setting>
      <Setting>
        <input
          type="radio"
          id="light"
          name="theme"
          onChange={handleChange}
          value="light"
          checked={activeTheme === 'light'}
        />
        <label htmlFor="light">{t('Light')}</label>
      </Setting>
    </>
  );
};

export default ThemePicker;
