import React from 'react';
import { useTranslation } from 'react-i18next';
import useWindowSize from '../../hooks/useMedia';
import { Menu, MenuMobile } from '../index';
import { Row } from '../layouts';
import { Nav, Flag, FlagWrapper } from '../styled';
import { logo, france, unitedKingdom } from '../../images';

const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const size = useWindowSize();
  const { width } = size;
  const isMobile = width > 0 && width < 768;

  return (
    <header>
      <Row as={Nav}>
        <FlagWrapper>
          <img src={logo} alt="logo" style={{ display: 'none' }} />

          <button onClick={() => changeLanguage('en')}>
            <Flag
              $currentLang={i18n.language === 'en'}
              src={unitedKingdom}
              alt={t('UnitedKingdomFlag')}
            />
          </button>
          <button onClick={() => changeLanguage('fr')}>
            <Flag $currentLang={i18n.language === 'fr'} src={france} alt={t('FranceFlag')} />
          </button>
        </FlagWrapper>
        {isMobile ? <MenuMobile /> : <Menu />}
      </Row>
    </header>
  );
};

export default Header;
