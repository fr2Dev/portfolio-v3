import React from 'react';
import { Experiences } from '../layouts';
import { Experience } from '../';
import { experiences } from '../../content';

const SectionExperience = () => {
  return (
    <section className="flow" id="experience">
      <h3>Where I’ve worked</h3>
      <Experiences>
        {experiences.map((exp, i) => (
          <Experience content={exp} key={i.toString()} />
        ))}
      </Experiences>
    </section>
  );
};

export default SectionExperience;
