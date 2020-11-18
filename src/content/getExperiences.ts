import { IExperience } from '../definitions/interfaces';

const getExperiences = (t: any): IExperience[] => [
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

export default getExperiences;
