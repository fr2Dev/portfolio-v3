import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useClickOutsideListenerRef } from '../hooks';
import { ISettings } from '../definitions/interfaces';
import { ThemePicker, LangPicker } from './';
import { SettingsList, ButtonSettings, Setting } from './styled';
import Cogwheel from './images/Cogwheel';

const Settings = ({ updateTheme }: ISettings) => {
  const [open, setOpen] = useState(true);
  const onClose = () => setOpen(false);
  const { t } = useTranslation();
  const ref = useClickOutsideListenerRef(onClose);

  return (
    <div style={{ position: 'relative' }} ref={ref}>
      <ButtonSettings $open={open} onClick={() => setOpen(!open)}>
        <Cogwheel title="settings" />
      </ButtonSettings>
      <SettingsList $open={open}>
        <Setting>{t('Language')}</Setting>
        <LangPicker />
        <Setting>{t('Theme')}</Setting>
        <ThemePicker updateTheme={updateTheme} />
      </SettingsList>
    </div>
  );
};

export default Settings;
