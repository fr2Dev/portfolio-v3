import React from 'react';
import { useTranslation } from 'react-i18next';
import { Setting } from './styled';
import { capitalize } from '../helpers/utilities';
import { RadioButton } from './';

const languages = ['en', 'fr'];

const LangPicker = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      {languages.map((language, i) => (
        <Setting $nested key={i.toString()}>
          <RadioButton
            value={language}
            name="lang"
            label={capitalize(language)}
            onChange={() => changeLanguage(language)}
            checked={i18n.language === language}
          />
        </Setting>
      ))}
    </>
  );
};

export default LangPicker;
