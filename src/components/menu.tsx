import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu as Wrapper } from '../components/styled';
import { getLinks } from '../content';
import { ItemNav, Button } from './styled';

const Menu = () => {
  const { t } = useTranslation();
  const links = getLinks(t);

  return (
    <Wrapper as="ul" alignItems="center">
      {links.map((link, i) => {
        const { href, name } = link;
        return (
          <ItemNav key={i.toString()}>
            <a href={href}>{name}</a>
          </ItemNav>
        );
      })}
      <li>
        {/* window.location.href = "https://yoursite.com/src/assets/​files/exampleDoc.pdf"  */}
        <Button as="a" outlined href="./assets/CvFD.pdf" target="_blank">
          {t('Resume')}
        </Button>
      </li>
    </Wrapper>
  );
};

export default Menu;
