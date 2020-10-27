import React, { useState, useEffect, useRef } from 'react';
import FocusTrap from 'focus-trap-react';
import useClickOutsideListenerRef from '../hooks/useClickOutsideListenerRef';
import { MenuMobile as Wrapper } from '../components/styled';
import { ButtonMenu } from '../components';
import { links } from '../content';
import { ItemNav, Button } from './styled';

const body = document.querySelector('body');
const MenuMobile = () => {
  useEffect(() => {
    return () => {
      close();
    };
  }, []);
  const [open, setOpen] = useState(false);
  const close = () => {
    body?.classList.remove('blur');
    setOpen(false);
  };
  const toggleNav = () => {
    setOpen((prev) => !prev);
    body?.classList.toggle('blur');
  };

  const handleLinks = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const link = event.target as HTMLAnchorElement;
    const { href } = link;
    close();
    window.open(href, '_self');
  };

  const ref = useClickOutsideListenerRef(close);

  return (
    <div ref={ref}>
      {!open && <ButtonMenu onClick={() => toggleNav()} />}
      {open && (
        <FocusTrap
          focusTrapOptions={{
            onDeactivate: () => close,
          }}
        >
          <div>
            <ButtonMenu open={open} onClick={() => toggleNav()} />
            <Wrapper as="ul" alignItems="center" open={open} mobile aria-hidden={!open}>
              {links.map((link, i) => {
                const { href, name } = link;
                return (
                  <ItemNav key={i.toString()}>
                    <a href={href} onClick={(e) => handleLinks(e)}>
                      {name}
                    </a>
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

export default MenuMobile;
