import React from 'react';
import useWindowSize from '../../hooks/useMedia';
import { ISettings } from '../../definitions/interfaces';
import { Menu, MenuMobile } from '../index';
import { Row } from '../layouts';
import { Settings } from '../';
import { Nav } from '../styled';

const Header = ({ updateTheme }: ISettings) => {
  const size = useWindowSize();
  const { width } = size;
  const isMobile = width > 0 && width < 768;

  return (
    <header>
      <Row as={Nav}>
        <Settings updateTheme={updateTheme} />
        {isMobile ? <MenuMobile /> : <Menu />}
      </Row>
    </header>
  );
};

export default Header;
