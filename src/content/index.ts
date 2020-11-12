import { IProject, IExperience } from '../definitions/interfaces';

export const getLinks = (t: any) => [
  {
    href: '#about',
    name: t('Navigation.About'),
  },
  {
    href: '#experience',
    name: t('Navigation.Experience'),
  },
  {
    href: '#work',
    name: t('Navigation.Work'),
  },
  {
    href: '#contact',
    name: t('Navigation.Contact'),
  },
];

export const getProjects = (t: any): IProject[] => [
  {
    url: '#',
    img: {
      src: 'https://francoisdpro.eu/assets/img/png/natours.png',
      alt: 'project fr2dev',
    },
    title: t('Projects.project1.title'),
    content: t('Projects.project1.description'),
    techList: ['React', 'Typescript', 'Styled-Components', 'Weather API'],
  },
  {
    url: '#',
    img: {
      src: 'http://francoisdpro.eu/assets/img/png/DWJ-projet3-min.png',
      alt: 'project fr2dev',
    },
    title: t('Projects.project2.title'),
    content: t('Projects.project2.description'),
    techList: ['jQuery', 'API', 'SCSS'],
  },
];

export const getExperiences = (t: any): IExperience[] => [
  {
    title: t('FrontEndDev'),
    company: {
      name: 'Filae',
      twitter: 'https://twitter.com/filaecom',
      period: t('Experiences.exp1.period'),
      location: t('Experiences.exp1.place'),
    },
    tasks: [
      t('Experiences.exp1.task1'),
      t('Experiences.exp1.task2'),
      t('Experiences.exp1.task3'),
      t('Experiences.exp1.task4'),
    ],
    techs: ['React', 'JS', 'jQuery', 'SCSS', 'Wordpress', 'Photoshop'],
  },
  {
    title: 'IT Developer',
    company: {
      name: 'Jimenez_FVA',
      twitter: 'https://twitter.com/jimenez_fva',
      period: t('Experiences.exp2.period'),
      location: t('Experiences.exp2.place'),
    },
    tasks: [
      t('Experiences.exp2.task1'),
      t('Experiences.exp2.task2'),
      t('Experiences.exp2.task3'),
      t('Experiences.exp2.task4'),
    ],
    techs: ['JS', 'jQuery', 'CSS', 'PHP', 'SQL'],
  },
];
