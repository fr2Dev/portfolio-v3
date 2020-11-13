import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Preview } from '../';
import { IProject } from '../../definitions/interfaces';
import { AnimationOnScroll } from '../../components';
import { Button } from '../../components/styled';
import { getProjects } from '../../content';

const SectionProjects = () => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);
  const projects = getProjects(t);
  const moreProjects = projects.splice(4, projects.length);

  return (
    <section className="flow" id="work">
      <h3>{t('Projects.title')}</h3>
      {projects.map((data: IProject, i) => {
        const isOdd = i % 2 === 0;
        return (
          <AnimationOnScroll from={isOdd ? 'left' : 'right'} key={i.toString()}>
            <Preview data={data} reversed={isOdd} />
          </AnimationOnScroll>
        );
      })}
      {!showMore && (
        <Button onClick={() => setShowMore(true)} outlined center>
          {t('ShowMore')}
        </Button>
      )}
      {showMore && (
        <>
          {moreProjects.map((data: IProject, i) => {
            const isOdd = i % 2 === 0;
            return (
              <AnimationOnScroll from={isOdd ? 'left' : 'right'} key={i.toString()}>
                <Preview data={data} reversed={isOdd} />
              </AnimationOnScroll>
            );
          })}
        </>
      )}
    </section>
  );
};

export default SectionProjects;
