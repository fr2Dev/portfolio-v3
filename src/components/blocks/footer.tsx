import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollButton } from '../';
import { Footer as Wrapper, Networks } from '../styled';
import { getNetworks } from '../../content';

const currentYear = new Date().getFullYear();

const Footer = () => {
  const { t } = useTranslation();
  const networks = getNetworks(t);

  return (
    <>
      <Wrapper>
        <p>
          francois.degrincourt<span className="highlight">@</span>gmail.com &copy; {currentYear}
        </p>
        <Networks>
          {networks.map((network, i) => {
            const { url, icon, label } = network;
            return (
              <li key={i.toString()}>
                <a href={url} aria-label={label} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              </li>
            );
          })}
        </Networks>
      </Wrapper>
      <ScrollButton />
    </>
  );
};

export default Footer;
