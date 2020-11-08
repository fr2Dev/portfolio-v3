import React from 'react';
import { useTranslation } from 'react-i18next';
import { Flag, Setting } from './styled';
import { france, unitedKingdom } from '../images';

const LangPicker = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Setting>
        <input
          type="radio"
          id="en"
          name="lang"
          onChange={() => changeLanguage('en')}
          value="en"
          checked={i18n.language === 'en'}
        />
        <label htmlFor="en">En</label>
        <Flag
          $currentLang={i18n.language === 'en'}
          src={unitedKingdom}
          alt={t('UnitedKingdomFlag')}
        />
      </Setting>
      <Setting>
        <input
          type="radio"
          id="fr"
          name="lang"
          onChange={() => changeLanguage('fr')}
          value="fr"
          checked={i18n.language === 'fr'}
        />
        <label htmlFor="fr">Fr</label>
        <Flag $currentLang={i18n.language === 'fr'} src={france} alt={t('FranceFlag')} />
      </Setting>
    </>
  );
};

export default LangPicker;
