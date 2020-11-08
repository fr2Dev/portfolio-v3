import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useClickOutsideListenerRef } from '../hooks';
import { ISettings } from '../definitions/interfaces';
import { ThemePicker, LangPicker } from './';
import { SettingsList, ButtonSettings, Setting, Divider, Wrapper } from './styled';
import Cogwheel from './images/Cogwheel';

const Settings = ({ updateTheme }: ISettings) => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const { t } = useTranslation();
  const ref = useClickOutsideListenerRef(onClose);

  return (
    <Wrapper ref={ref}>
      <ButtonSettings $open={open} onClick={() => setOpen(!open)}>
        <Cogwheel title="settings" />
      </ButtonSettings>
      <SettingsList $open={open}>
        <Setting>
          <div className="bold">{t('Language')}</div>
          <Divider />
        </Setting>
        <LangPicker />
        <Setting>
          <div className="bold">{t('Theme')}</div>
          <Divider />
        </Setting>
        <ThemePicker updateTheme={updateTheme} />
      </SettingsList>
    </Wrapper>
  );
};

export default Settings;
