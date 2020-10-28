import React from 'react';
import { Hero } from '../../components/layouts';
import { Button, Highlight, Introduction } from '../../components/styled';
const SectionHero = () => {
  return (
    <Hero>
      <p>Hello, my name is</p>
      <h1>François Degrincourt</h1>
      <h2>I build stuff on the web</h2>
      <Introduction>
        I'm a{' '}
        <Highlight>
          <span>Front-End Developer</span>
        </Highlight>{' '}
        based in Paris, France, specializing in building (and occasionally designing) amazing
        websites.
      </Introduction>
      <Button as="a" href="#contact">
        Get in touch
      </Button>
    </Hero>
  );
};

export default SectionHero;
