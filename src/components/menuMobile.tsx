import React, { useState, useEffect } from 'react';
import FocusTrap from 'focus-trap-react';
import { MenuMobile as Wrapper } from '../components/styled';
import { ButtonMenu } from '../components';
import { ItemNav, Button } from './styled';

const body = document.querySelector('body');
const MenuMobile = () => {
  useEffect(() => {
    return () => {
      body?.classList.remove('blur');
    };
  }, []);
  const [open, setOpen] = useState(false);
  const toggleNav = () => {
    setOpen((prev) => !prev);
    body?.classList.toggle('blur');
  };

  return (
    <div>
      {!open && <ButtonMenu onClick={() => toggleNav()} />}
      {open && (
        <FocusTrap
          focusTrapOptions={{
            onDeactivate: () => {
              console.log('deactivate');
              setOpen(false);
            },
          }}
        >
          <div>
            <ButtonMenu open={open} onClick={() => toggleNav()} />
            <Wrapper as="ul" alignItems="center" open={open} mobile aria-hidden={!open}>
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
        </FocusTrap>
      )}
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

export default MenuMobile;
