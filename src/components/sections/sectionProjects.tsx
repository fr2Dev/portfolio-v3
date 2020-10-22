import React from 'react';
import { Preview } from '../';
import { Project } from '../../definitions/interfaces';

const SectionProjects = () => {
  return (
    <section className="flow">
      <h3>Some stuff I've made</h3>
      {datas.map((data: Project, i) => {
        const isOdd = i % 2 === 0;
        return <Preview data={data} reversed={isOdd} key={i.toString()} />;
      })}
    </section>
  );
};

const datas: Project[] = [
  {
    url: '#',
    img: {
      src: 'https://francoisdpro.eu/assets/img/png/natours.png',
      alt: 'project fr2dev',
    },
    title: 'Home page',
    content:
      'A landing page where you get multiples informations like your todo list, time, weather or some quotes.',
    techList: ['React', 'Typescript', 'Styled-Components'],
  },
  {
    url: '#',
    img: {
      src: 'https://francoisdpro.eu/assets/img/png/natours.png',
      alt: 'project fr2dev',
    },
    title: 'Bike reservation',
    content:
      'A bike reservation interface where you get multiples informations like your todo list, time, weather or some quotes.',
    techList: ['jQuery', 'API', 'Styled-Components'],
  },
];

export default SectionProjects;
