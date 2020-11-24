import { IProject } from '../definitions/interfaces';
import {
  bike,
  coffee,
  hairdresser,
  home,
  natours,
  portfolioV1,
  portfolioV2,
  rickandmorty,
  yams,
} from '../images/thumbnails';

const getGithub = (repoName: string) => `https://github.com/fr2Dev/${repoName}`;
const getSite = (subDomain: string) => `https://${subDomain}.francoisdpro.eu`;

const getProjects = (t: any): IProject[] => [
  {
    url: getSite('home-page'),
    img: {
      src: home,
      alt: 'project fr2dev',
    },
    title: t('Projects.project1.title'),
    content: t('Projects.project1.description'),
    techList: ['React', 'Typescript', 'Styled-Components', 'Weather API'],
    github: getGithub('home-page'),
  },
  {
    url: getSite('bike'),
    img: {
      src: bike,
      alt: 'project fr2dev',
    },
    title: t('Projects.project2.title'),
    content: t('Projects.project2.description'),
    techList: ['jQuery', 'CSS', 'Velib API'],
  },
  {
    url: getSite('natours'),
    img: {
      src: natours,
      alt: 'project fr2dev',
    },
    title: t('Projects.project3.title'),
    content: t('Projects.project3.description'),
    techList: ['SCSS', 'HTML'],
  },
  {
    url: getSite('portfolio-v2'),
    img: {
      src: portfolioV2,
      alt: 'project fr2dev',
    },
    title: t('Projects.project4.title'),
    content: t('Projects.project4.description'),
    techList: ['Javascript', 'SCSS', 'HTML'],
    github: getGithub('portfolio2.0'),
  },
  {
    url: getSite('yams'),
    img: {
      src: yams,
      alt: 'project fr2dev',
    },
    title: t('Projects.project5.title'),
    content: t('Projects.project5.description'),
    techList: ['React', 'Typescript', 'TVmaze API'],
    github: getGithub('yams'),
  },
  {
    url: getSite('hairdresser'),
    img: {
      src: hairdresser,
      alt: 'project fr2dev',
    },
    title: t('Projects.project6.title'),
    content: t('Projects.project6.description'),
    techList: ['Javascript', 'SCSS', 'HTML'],
  },
  {
    url: getSite('rick-and-morty'),
    img: {
      src: rickandmorty,
      alt: 'project fr2dev',
    },
    title: t('Projects.project7.title'),
    content: t('Projects.project7.description'),
    techList: ['Javascript', 'SCSS', 'HTML'],
    github: getGithub('rick-and-morty'),
  },
  {
    url: getSite('coffee'),
    img: {
      src: coffee,
      alt: 'project fr2dev',
    },
    title: t('Projects.project8.title'),
    content: t('Projects.project8.description'),
    techList: ['jQuery', 'CSS', 'HTML'],
  },
  {
    url: getSite('portfolio-v1'),
    img: {
      src: portfolioV1,
      alt: 'project fr2dev',
    },
    title: t('Projects.project9.title'),
    content: t('Projects.project9.description'),
    techList: ['Javascript', 'CSS', 'HTML'],
  },
];

export default getProjects;
