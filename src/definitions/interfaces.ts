import { Theme } from './types';

export interface IProject {
  url: string;
  img: {
    src: string;
    alt: string;
  };
  title: string;
  content: string;
  techList: string[];
  github?: string;
}

export interface IExperience {
  title: string;
  company: {
    name: string;
    twitter: string;
    period: string;
    location: string;
  };
  tasks: string[];
  techs: string[];
}

export interface ISettings {
  updateTheme: (value: Theme) => void;
}

export interface ISvg {
  title?: string;
}
