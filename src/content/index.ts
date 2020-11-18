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

// - [ ]  Init
//     - [ ]  Home page (React, Typescript, Styled-Components) gh
//     - [ ]  Portfolio v2 (HTML, SCSS) gh
//     - [ ]  Natours (HTML , CSS)
//     - [ ]  Vélo
// - [ ]  More ...
//     - [ ]  Yams Jest (Javascript, Jest, CSS) gh
//     - [ ]  sandbox-typescript ⇒ rick & morty ( TVmaze API, Typescript, React) gh
//     - [ ]  Hairdresser (Html, Scss) gh
//     - [ ]  Sweat Café (Html, Scss) gh
//     - [ ]  Webfirst ?  (Html, jquery, CSS)
//     - [ ]  Portfolio v1  (Html, CSS)
const getUrl = (name: string) => `./assets/images/thumbnails/${name}-min.png`;

export const getProjects = (t: any): IProject[] => [
  {
    url: '#',
    img: {
      src: getUrl('home'),
      alt: 'project fr2dev',
    },
    title: t('Projects.project1.title'),
    content: t('Projects.project1.description'),
    techList: ['React', 'Typescript', 'Styled-Components', 'Weather API'],
    github: 'https://github.com/fr2Dev/home-page',
  },
  {
    url: '#',
    img: {
      src: getUrl('bike'),
      alt: 'project fr2dev',
    },
    title: t('Projects.project2.title'),
    content: t('Projects.project2.description'),
    techList: ['jQuery', 'CSS', 'Velib API'],
  },
  {
    url: '#',
    img: {
      src: getUrl('natours'),
      alt: 'project fr2dev',
    },
    title: t('Projects.project3.title'),
    content: t('Projects.project3.description'),
    techList: ['SCSS', 'HTML'],
  },
  {
    url: '#',
    img: {
      src: getUrl('portfolio-v2'),
      alt: 'project fr2dev',
    },
    title: t('Projects.project4.title'),
    content: t('Projects.project4.description'),
    techList: ['Javascript', 'SCSS', 'HTML'],
    github: 'https://github.com/fr2Dev/portfolio2.0',
  },
  {
    url: '#',
    img: {
      src: getUrl('yams'),
      alt: 'project fr2dev',
    },
    title: t('Projects.project5.title'),
    content: t('Projects.project5.description'),
    techList: ['React', 'Typescript', 'TVmaze API'],
    github: 'https://github.com/fr2Dev/yams',
  },
  {
    url: '#',
    img: {
      src: getUrl('hairdresser'),
      alt: 'project fr2dev',
    },
    title: t('Projects.project6.title'),
    content: t('Projects.project6.description'),
    techList: ['Javascript', 'SCSS', 'HTML'],
  },
  {
    url: '#',
    img: {
      src: getUrl('rickandmorty'),
      alt: 'project fr2dev',
    },
    title: t('Projects.project7.title'),
    content: t('Projects.project7.description'),
    techList: ['Javascript', 'SCSS', 'HTML'],
    github: 'https://github.com/fr2Dev/rick-and-morty',
  },
  {
    url: '#',
    img: {
      src: getUrl('coffee'),
      alt: 'project fr2dev',
    },
    title: t('Projects.project8.title'),
    content: t('Projects.project8.description'),
    techList: ['jQuery', 'CSS', 'HTML'],
  },
  {
    url: '#',
    img: {
      src: getUrl('portftolio-v1'),
      alt: 'project fr2dev',
    },
    title: t('Projects.project9.title'),
    content: t('Projects.project9.description'),
    techList: ['Javascript', 'CSS', 'HTML'],
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
