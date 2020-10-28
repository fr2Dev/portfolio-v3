import React from 'react';
import { Experiences } from '../layouts';
import { Experience, Animation } from '../';
import { experiences } from '../../content';

const SectionExperience = () => {
  return (
    <section className="flow" id="experience">
      <h3>Where I’ve worked</h3>
      <Experiences>
        {experiences.map((exp, i) => (
          <Animation key={i.toString()}>
            <Experience content={exp} />
          </Animation>
        ))}
      </Experiences>
    </section>
  );
};

export default SectionExperience;
