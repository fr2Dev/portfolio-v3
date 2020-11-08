import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useClickOutsideListenerRef } from '../hooks';
import { ISettings } from '../definitions/interfaces';
import { ThemePicker, LangPicker } from './';
import { SettingsList, ButtonSettings, Setting } from './styled';
import Cogwheel from './images/Cogwheel';

interface RadioButtonProps {
  value: string;
  name: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const RadioButton = ({ value, name, label, onChange, checked }: RadioButtonProps) => {
  return (
    <label htmlFor={value} className="radio radio-before">
      <span className="radio__input">
        <input
          type="radio"
          id={value}
          name={name}
          onChange={onChange}
          value={value}
          checked={checked}
        />
        <span className="radio__control"></span>
      </span>
      <span className="radio__label">{label}</span>
    </label>
  );
};

export default RadioButton;
