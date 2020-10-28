import React from 'react';
import { Preview } from '../';
import { IProject } from '../../definitions/interfaces';
import { projects } from '../../content';
import { AnimationOnScroll } from '../../components';

const SectionProjects = () => {
  return (
    <section className="flow" id="work">
      <h3>Some stuff I've made</h3>
      {projects.map((data: IProject, i) => {
        const isOdd = i % 2 === 0;
        return (
          <AnimationOnScroll from={isOdd ? 'left' : 'right'} key={i.toString()}>
            <Preview data={data} reversed={isOdd} />
          </AnimationOnScroll>
        );
      })}
    </section>
  );
};

export default SectionProjects;
