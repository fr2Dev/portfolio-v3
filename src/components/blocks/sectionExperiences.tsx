import React from 'react';
import { useTranslation } from 'react-i18next';
import { Experiences } from '../layouts';
import { Experience, AnimationOnScroll } from '../';
import { getExperiences } from '../../content';

const SectionExperience = () => {
  const { t } = useTranslation();
  const experiences = getExperiences(t);

  return (
    <section className="flow" id="experience">
      <h3>{t('Experiences.title')}</h3>
      <Experiences>
        {experiences.map((exp, i) => (
          <AnimationOnScroll from="bottom" key={i.toString()}>
            <Experience content={exp} />
          </AnimationOnScroll>
        ))}
      </Experiences>
    </section>
  );
};

export default SectionExperience;
