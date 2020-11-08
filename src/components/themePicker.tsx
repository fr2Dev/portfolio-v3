import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ISettings } from '../definitions/interfaces';
import { Theme } from '../definitions/types';
import { RadioButton } from './';
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
        <RadioButton
          value="default"
          name="theme"
          label={t('Default')}
          onChange={handleChange}
          checked={activeTheme === 'default'}
        />
      </Setting>
      <Setting>
        <RadioButton
          value="dark"
          name="theme"
          label={t('Dark')}
          onChange={handleChange}
          checked={activeTheme === 'dark'}
        />
      </Setting>
      <Setting>
        <RadioButton
          value="light"
          name="theme"
          label={t('Light')}
          onChange={handleChange}
          checked={activeTheme === 'light'}
        />
      </Setting>
    </>
  );
};

export default ThemePicker;
