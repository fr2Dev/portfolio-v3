import React from 'react';
import useWindowSize from '../../hooks/useMedia';
import { Menu, MenuMobile } from '../index';
import { Row } from '../layouts';
import { Nav } from '../styled';
import logo from '../../images/logo.svg';

const Header = () => {
  const size = useWindowSize();
  const { width } = size;
  const isMobile = width > 0 && width < 768;

  return (
    <header>
      <Row as={Nav}>
        <div>
          <img src={logo} alt="logo" style={{ display: 'none' }} />
        </div>
        {isMobile ? <MenuMobile /> : <Menu />}
      </Row>
    </header>
  );
};

export default Header;
