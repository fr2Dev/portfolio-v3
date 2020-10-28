import React from 'react';
import { Footer as Wrapper } from '../styled';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <Wrapper>
      francois.degrincourt<span className="highlight">@</span>gmail.com &copy; {currentYear}
    </Wrapper>
  );
};

export default Footer;
