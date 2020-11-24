import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import FocusTrap from 'focus-trap-react';
import useClickOutsideListenerRef from '../hooks/useClickOutsideListenerRef';
import { MenuMobile as Wrapper } from '../components/styled';
import { ButtonMenu } from '../components';
import { getLinks } from '../content';
import { ItemNav, Button } from './styled';

const body = document.querySelector('body');
const MenuMobile = () => {
  useEffect(() => {
    return () => {
      close();
    };
  }, []);
  const { t } = useTranslation();
  const links = getLinks(t);

  const [open, setOpen] = useState(false);
  const [activeTrap, setActiveTrap] = useState(false);
  const close = () => {
    body?.classList.remove('blur');
    setOpen(false);
    setTimeout(() => {
      setActiveTrap(false);
    }, 150);
  };
  const toggleNav = () => {
    setOpen((prev) => !prev);
    body?.classList.toggle('blur');
    setActiveTrap(true);
  };

  const handleLinks = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const link = event.target as HTMLAnchorElement;
    const { href } = link;
    close();
    window.open(href, '_self');
  };

  const ref = useClickOutsideListenerRef(close, { click: false });

  const children = (
    <nav>
      <ButtonMenu id="toggle" open={open} onClick={open ? close : toggleNav} />
      <Wrapper as="ul" alignItems="center" $open={open} mobile aria-hidden={!open}>
        {links.map((link, i) => {
          const { href, name } = link;
          return (
            <ItemNav key={i.toString()}>
              <a href={href} onClick={handleLinks}>
                {name}
              </a>
            </ItemNav>
          );
        })}

        <li>
          <Button as="a" outlined href="./assets/CvFD.pdf" target="_blank">
            {t('Resume')}
          </Button>
        </li>
      </Wrapper>
    </nav>
  );

  return (
    <aside ref={ref}>
      {activeTrap ? (
        <FocusTrap
          focusTrapOptions={{
            onDeactivate: () => close,
            preventScroll: true,
          }}
        >
          {children}
        </FocusTrap>
      ) : (
        <div>{children}</div>
      )}
    </aside>
  );
};

export default MenuMobile;
