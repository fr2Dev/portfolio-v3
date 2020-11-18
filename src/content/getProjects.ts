import { IProject } from '../definitions/interfaces';

const getUrl = (name: string) => `./assets/images/thumbnails/${name}-min.png`;
const geGithub = (repoName: string) => `https://github.com/fr2Dev/${repoName}`;

const getProjects = (t: any): IProject[] => [
  {
    url: '#',
    img: {
      src: getUrl('home'),
      alt: 'project fr2dev',
    },
    title: t('Projects.project1.title'),
    content: t('Projects.project1.description'),
    techList: ['React', 'Typescript', 'Styled-Components', 'Weather API'],
    github: geGithub('home-page'),
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
    github: geGithub('portfolio2.0'),
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
    github: geGithub('yams'),
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
    github: geGithub('rick-and-morty'),
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

export default getProjects;
