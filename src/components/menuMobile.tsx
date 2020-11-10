import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import FocusTrap from 'focus-trap-react';
import useClickOutsideListenerRef from '../hooks/useClickOutsideListenerRef';
import withFocusTrap from '../hoc/withFocusTrap';
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

  const children = (
    <nav>
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
          <Button as="a" outlined href="./assets/CvFD.pdf" target="_blank">
            {t('Resume')}
          </Button>
        </li>
      </Wrapper>
    </nav>
  );

  return (
    <aside>
      {open ? (
        <FocusTrap
          focusTrapOptions={{
            onDeactivate: () => close,
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
// export default withFocusTrap(MenuMobile)(open);
