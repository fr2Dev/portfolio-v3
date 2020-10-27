import { Project, Experience } from '../definitions/interfaces';

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

export const experiences: Experience[] = [
  {
    title: 'Front End Developer',
    company: {
      name: 'Filae',
      twitter: '#',
      period: 'April 2019 - Present',
      location: '75 - Paris',
    },
    tasks: ['Integration', 'UI fix & update', 'Newsletter & mailing', 'Visual creation'],
    techs: ['React', 'JS', 'jQuery', 'SCSS', 'Wordpress', 'Photoshop'],
  },
  {
    title: 'IT Developer',
    company: {
      name: 'Jimenez_FVA',
      twitter: '#',
      period: 'June - September 2018',
      location: '31 - Villeneuve-lès-Bouloc',
    },
    tasks: ['Creation of a management tool', 'Integration', 'Front-end', 'Back-end'],
    techs: ['JS', 'jQuery', 'CSS', 'PHP', 'SQL'],
  },
];
