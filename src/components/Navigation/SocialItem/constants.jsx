import React from 'react';
import * as SocialIcons from '../../Icons/socials';

const SOCIALS_CONFIG = {
  facebook: {
    name: 'Facebook',
    color: '#3b5998',
    link: 'https://www.facebook.com/WizelineGlobal/',
    icon: <SocialIcons.Facebook />,
  },
  twitter: {
    name: 'Twitter',
    color: '#1da1f2;',
    link: 'https://twitter.com/thewizeline',
    icon: <SocialIcons.Twitter />,
  },
  email: {
    name: 'Email',
    color: '#dd4b39;',
    link: 'mailto:contact@wizeline.com',
    icon: <SocialIcons.Gmail />,
  },
  website: {
    name: 'Website',
    color: '#000000;',
    link: 'https://www.wizeline.com/',
    icon: <SocialIcons.Website />,
  },
  linkedin: {
    name: 'LinkedIn',
    color: '#0077b5;',
    link: 'https://www.linkedin.com/company/wizeline',
    icon: <SocialIcons.Linkedin />,
  },
  youtube: {
    name: 'YouTube',
    color: '#ff0000;',
    link: 'https://www.youtube.com/channel/UCPGzT4wecuWM0BH9mPiulXg',
    icon: <SocialIcons.Youtube />,
  },
};

export default SOCIALS_CONFIG;
