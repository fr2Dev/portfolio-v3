import React from 'react';
import { useTranslation } from 'react-i18next';
import { Flag, Setting } from './styled';
import { RadioButton } from './';
import { france, unitedKingdom } from '../images';

const LangPicker = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Setting>
        <RadioButton
          value="en"
          name="lang"
          label="En"
          onChange={() => changeLanguage('en')}
          checked={i18n.language === 'en'}
        />
        {/* <Flag
          $currentLang={i18n.language === 'en'}
          src={unitedKingdom}
          alt={t('UnitedKingdomFlag')}
        /> */}
      </Setting>
      <Setting>
        <RadioButton
          value="fr"
          name="lang"
          label="Fr"
          onChange={() => changeLanguage('fr')}
          checked={i18n.language === 'fr'}
        />

        {/* <Flag $currentLang={i18n.language === 'fr'} src={france} alt={t('FranceFlag')} /> */}
      </Setting>
    </>
  );
};

export default LangPicker;
