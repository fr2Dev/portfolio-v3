import React from 'react';
import { ScrollButton } from '../';
import { Footer as Wrapper } from '../styled';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <Wrapper>
        francois.degrincourt<span className="highlight">@</span>gmail.com &copy; {currentYear}
      </Wrapper>
      <ScrollButton />
    </>
  );
};

export default Footer;
