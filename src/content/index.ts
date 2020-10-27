import { Project } from '..//definitions/interfaces';

export const links = [
  {
    href: '#about',
    name: 'About',
  },
  {
    href: '#experience',
    name: 'Experience',
  },
  {
    href: '#work',
    name: 'Work',
  },
  {
    href: '#contact',
    name: 'Contact',
  },
];

export const projects: Project[] = [
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
      src: 'http://francoisdpro.eu/assets/img/png/DWJ-projet3-min.png',
      alt: 'project fr2dev',
    },
    title: 'Bike reservation',
    content:
      'A bike reservation interface where you get multiples informations like your todo list, time, weather or some quotes.',
    techList: ['jQuery', 'API', 'Styled-Components'],
  },
];
