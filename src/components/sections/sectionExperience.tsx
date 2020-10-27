import React from 'react';
import { Experience } from '../../components/layouts';
import { Card } from '../../components';
import { TwitterLink, TechList, Comment, Tasks } from '../../components/styled';
const SectionExperience = () => {
  return (
    <section className="flow" id="experience">
      <h3>Where I’ve worked</h3>
      <Experience>
        <Card variant="experience">
          <h4>
            <span>Front End Developer</span> <TwitterLink href="#">@Filae</TwitterLink>
          </h4>
          <Comment>// Period: April 2019 - Present </Comment>
          <Comment>// Place: 75 - Paris</Comment>
          <Tasks>
            <li>Integration</li>
            <li>UI fix & update</li>
            <li>Newsletter & mailing</li>
            <li>Visual creation</li>
          </Tasks>
          <TechList as="ul" wrap="wrap">
            <li>React</li>
            <li>JS</li>
            <li>jQuery</li>
            <li>SCSS</li>
            <li>Wordpress</li>
            <li>Photoshop</li>
          </TechList>
        </Card>
        <Card variant="experience">
          <h4>
            <span>IT Developer</span> <TwitterLink href="#">@Jimenez_FVA</TwitterLink>
          </h4>
          <Comment>// Period: June - September 2018</Comment>
          <Comment>// Place: 31 - Villeneuve-lès-Bouloc</Comment>
          <Tasks>
            <li>Creation of a management tool</li>
            <li>Integration</li>
            <li>Front-end</li>
            <li>Back-end</li>
          </Tasks>
          <TechList as="ul" wrap="wrap">
            <li>JS</li>
            <li>jQuery</li>
            <li>CSS</li>
            <li>PHP</li>
            <li>SQL</li>
          </TechList>
        </Card>
      </Experience>
    </section>
  );
};

export default SectionExperience;
