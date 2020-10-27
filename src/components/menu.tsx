import React from 'react';
import { Menu as Wrapper } from '../components/styled';
import { links } from '../content';
import { ItemNav, Button } from './styled';

const Menu = () => {
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
        <Button as="a" outlined href="#">
          Resume
        </Button>
      </li>
    </Wrapper>
  );
};

export default Menu;
