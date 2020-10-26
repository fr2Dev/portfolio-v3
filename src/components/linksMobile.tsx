import React, { useState, useEffect } from 'react';
import useClickOutsideListenerRef from '../hooks/useClickOutsideListenerRef';
import { MenuMobile as Wrapper } from '../components/styled';
import { ButtonMenu } from '../components';
import { ItemNav, Button } from './styled';

interface LinksMobileProps {
  open: boolean;
  setOpen: (state: boolean) => void;
  toggleNav: () => void;
}
const LinksMobile = ({ open, setOpen, toggleNav }: LinksMobileProps) => {
  const handleClickOutside = () => {
    if (open) return setOpen(false);
  };
  const ref = useClickOutsideListenerRef(() => handleClickOutside);

  return (
    <div>
      <div>
        <ButtonMenu open={open} onClick={() => toggleNav()} />
        <Wrapper as="ul" alignItems="center" open={open} mobile aria-hidden={!open} ref={ref}>
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
      </div>
    </div>
  );
};

const links = [
  {
    href: '#about',
    name: 'About',
  },
  {
    href: '#experience',
    name: 'Experience',
  },
  {
    href: '#work',
    name: 'Work',
  },
  {
    href: '#contact',
    name: 'Contact',
  },
];

export default LinksMobile;
