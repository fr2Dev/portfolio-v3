import React from 'react';
import { useTranslation } from 'react-i18next';
import { Hero } from '../../components/layouts';
import { Button, Highlight, Introduction } from '../../components/styled';
import { Devices } from '../images';
import { AnimationOnScroll } from '../';

const SectionHero = () => {
  const { t } = useTranslation();

  const role = (
    <Highlight>
      <span>{t('FrontEndDev')}</span>
    </Highlight>
  );

  return (
    <Hero>
      <p>{t('Hero.HelloMyNameIs')}</p>
      <AnimationOnScroll from="left" noScroll>
        <h1>François Degrincourt</h1>
      </AnimationOnScroll>
      <AnimationOnScroll from="left" delay={1.25} noScroll>
        <h2>{t('Hero.IBuildStuff')}</h2>
      </AnimationOnScroll>
      <Introduction>
        {t('Hero.introduce.part1')} {role} {t('Hero.introduce.part2')}
      </Introduction>
      <Button as="a" href="#contact">
        {t('GetInTouch')}
      </Button>
      <Devices title={t('SmartphoneTabletLaptop')} />
    </Hero>
  );
};

export default SectionHero;
