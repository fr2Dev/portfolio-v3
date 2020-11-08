import React, { useState } from 'react';
import { ISettings } from '../definitions/interfaces';
import { ThemePicker, LangPicker } from './';
import { SettingsList, ButtonSettings } from './styled';
import Cogwheel from './images/Cogwheel';

const Settings = ({ updateTheme }: ISettings) => {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ position: 'relative' }}>
      <ButtonSettings $open={open} onClick={() => setOpen(!open)}>
        <Cogwheel title="settings" />
      </ButtonSettings>
      <SettingsList $open={open}>
        <LangPicker />
        <ThemePicker updateTheme={updateTheme} />
      </SettingsList>
    </div>
  );
};

export default Settings;
