import React from 'react';
import { useTranslation } from 'react-i18next';
import { About } from '../../components/layouts';
import { Card, Avatar, AnimationOnScroll } from '../../components';
import { TwitterLink, TechList } from '../../components/styled';
const SectionAbout = () => {
  const { t } = useTranslation();

  return (
    <section className="flow" id="about">
      <h3>{t('About.title')}</h3>
      <About>
        <div>
          <AnimationOnScroll from="left">
            <Card variant="browser">
              <p style={{ marginBottom: '10px' }}>
                {t('About.introduce.part1')}{' '}
                <span role="img" aria-labelledby="waving hand">
                  👋
                </span>{' '}
                {t('About.introduce.part2')} <TwitterLink href="#">@OpenClassrooms</TwitterLink>{' '}
                {t('About.introduce.part3')} <TwitterLink href="#">@Filae</TwitterLink>
                {t('About.introduce.part4')}
              </p>
              <p>{t('About.IVBeenWorkingWith')}</p>
              <TechList as="ul" $wrap="wrap">
                <li>React</li>
                <li>Typescript</li>
                <li>jQuery</li>
                <li>SCSS</li>
                <li>HTML</li>
                <li>Wordpress</li>
                <li>Git</li>
              </TechList>
            </Card>
          </AnimationOnScroll>
        </div>
        <Avatar title="François Degrincourt" titleId="Avatar François Degrincourt" />
      </About>
    </section>
  );
};

export default SectionAbout;
