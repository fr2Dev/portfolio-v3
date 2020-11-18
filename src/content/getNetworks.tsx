import React from 'react';
import { INetwork } from '../definitions/interfaces';
import { Github, Twitter, LinkedIn } from '../components/images';

const getNetworks = (t: any): INetwork[] => [
  {
    url: 'https://github.com/fr2Dev',
    icon: <Github />,
    label: t('Links.myProfile', { name: 'github' }),
  },
  {
    url: 'https://www.linkedin.com/in/fran%C3%A7ois-degrincourt-a9a63572/',
    icon: <LinkedIn />,
    label: t('Links.myProfile', { name: 'linkedIn' }),
  },
  {
    url: 'https://twitter.com/fr2_Dev',
    icon: <Twitter />,
    label: t('Links.myProfile', { name: 'twitter' }),
  },
];

export default getNetworks;
