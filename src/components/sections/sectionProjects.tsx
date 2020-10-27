import React from 'react';
import { Preview } from '../';
import { Project } from '../../definitions/interfaces';
import { projects } from '../../content';

const SectionProjects = () => {
  return (
    <section className="flow" id="work">
      <h3>Some stuff I've made</h3>
      {projects.map((data: Project, i) => {
        const isOdd = i % 2 === 0;
        return <Preview data={data} reversed={isOdd} key={i.toString()} />;
      })}
    </section>
  );
};

export default SectionProjects;
