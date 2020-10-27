export interface IProject {
  url: string;
  img: {
    src: string;
    alt: string;
  };
  title: string;
  content: string;
  techList: string[];
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
