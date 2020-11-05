import React from 'react';
import { useTranslation } from 'react-i18next';
import { Contact } from '../../components/layouts';
import { Card, AnimationOnScroll } from '../../components';
import { Button } from '../../components/styled';
const SectionContact = () => {
  const { t } = useTranslation();

  return (
    <Contact className="flow" id="contact">
      <h3 style={{ textTransform: 'capitalize' }}>{t('GetInTouch')}</h3>
      <AnimationOnScroll from="top">
        <Card variant="message">
          {t('Contact.content.part1')}{' '}
          <span className="highlight">{t('Contact.content.part2')}</span>
          {t('Contact.content.part3')}
        </Card>
      </AnimationOnScroll>
      <Button as="a" href="mailto:francois.degrincourt@gmail.com" outlined>
        {t('SayHi')}
      </Button>
    </Contact>
  );
};

export default SectionContact;
