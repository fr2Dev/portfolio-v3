import React from 'react';
import { useTranslation } from 'react-i18next';
import { Hero } from '../../components/layouts';
import { Button, Highlight, Introduction } from '../../components/styled';
import { AnimationOnScroll } from '../';

const SectionHero = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <Hero>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('fr')}>FR</button>
      <h1>{t('description.part1')}</h1>
      <p>Hello, my name is</p>
      <AnimationOnScroll from="left" noScroll>
        <h1>François Degrincourt</h1>
      </AnimationOnScroll>
      <AnimationOnScroll from="left" delay={1.25} noScroll>
        <h2>I build stuff on the web</h2>
      </AnimationOnScroll>
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
