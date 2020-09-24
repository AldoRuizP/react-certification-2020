import React from 'react';
import { render } from '@testing-library/react';
import * as SocialIcons from './socials';
import * as NavigationIcons from './navigation';
import { getAvatarByName } from './avatars';

describe('Test Social Icons', () => {
  it('Renders facebook icon', () => {
    const { container } = render(<SocialIcons.Facebook />);
    expect(container.firstChild.nodeName).toBe('svg');
    expect(container.firstChild.innerHTML).toBe('facebook.svg');
  });

  it('Renders Gmail icon', () => {
    const { container } = render(<SocialIcons.Gmail />);
    expect(container.firstChild.nodeName).toBe('svg');
    expect(container.firstChild.innerHTML).toBe('gmail.svg');
  });

  it('Renders Linkedin icon', () => {
    const { container } = render(<SocialIcons.Linkedin />);
    expect(container.firstChild.nodeName).toBe('svg');
    expect(container.firstChild.innerHTML).toBe('linkedin.svg');
  });

  it('Renders Twitter icon', () => {
    const { container } = render(<SocialIcons.Twitter />);
    expect(container.firstChild.nodeName).toBe('svg');
    expect(container.firstChild.innerHTML).toBe('twitter.svg');
  });

  it('Renders Website icon', () => {
    const { container } = render(<SocialIcons.Website />);
    expect(container.firstChild.nodeName).toBe('svg');
    expect(container.firstChild.innerHTML).toBe('www.svg');
  });

  it('Renders Youtube icon', () => {
    const { container } = render(<SocialIcons.Youtube />);
    expect(container.firstChild.nodeName).toBe('svg');
    expect(container.firstChild.innerHTML).toBe('youtube.svg');
  });
});

describe('Test Navigation Icons', () => {
  it('Renders favorite icon', () => {
    const { container } = render(<NavigationIcons.Favorite />);
    expect(container.firstChild.nodeName).toBe('svg');
    expect(container.firstChild.innerHTML).toBe('favorite.svg');
  });

  it('Renders logout icon', () => {
    const { container } = render(<NavigationIcons.Logout />);
    expect(container.firstChild.nodeName).toBe('svg');
    expect(container.firstChild.innerHTML).toBe('logout.svg');
  });

  it('Renders search icon', () => {
    const { container } = render(<NavigationIcons.Search />);
    expect(container.firstChild.nodeName).toBe('svg');
    expect(container.firstChild.innerHTML).toBe('search.svg');
  });

  it('Renders settings icon', () => {
    const { container } = render(<NavigationIcons.Settings />);
    expect(container.firstChild.nodeName).toBe('svg');
    expect(container.firstChild.innerHTML).toBe('settings.svg');
  });

  it('Renders share icon', () => {
    const { container } = render(<NavigationIcons.Share />);
    expect(container.firstChild.nodeName).toBe('svg');
    expect(container.firstChild.innerHTML).toBe('share.svg');
  });

  it('Renders chevron icon', () => {
    const { container } = render(<NavigationIcons.Chevron />);
    expect(container.firstChild.nodeName).toBe('svg');
    expect(container.firstChild.innerHTML).toBe('chevron.svg');
  });

  it('Renders wizeline logo icon', () => {
    const { container } = render(<NavigationIcons.WizelineLogo />);
    expect(container.firstChild.nodeName).toBe('svg');
    expect(container.firstChild.innerHTML).toBe('wizeline_logo.svg');
  });

  it('Renders wizeline header light icon', () => {
    const { container } = render(<NavigationIcons.WizelineHeaderLight />);
    expect(container.firstChild.nodeName).toBe('svg');
    expect(container.firstChild.innerHTML).toBe('wizeline_header_light.svg');
  });

  it('Renders image icon', () => {
    const { container } = render(<NavigationIcons.Image />);
    expect(container.firstChild.nodeName).toBe('svg');
    expect(container.firstChild.innerHTML).toBe('image.svg');
  });
});

describe('Test Avatar Icons', () => {
  const avatarNames = [
    'bear',
    'bird',
    'buffalo',
    'cat',
    'cow',
    'deer',
    'dog',
    'elephant',
    'fox',
    'giraffe',
    'goat',
    'gorilla',
    'hippopotamus',
    'horse',
    'husky',
    'koala',
    'lion',
    'monkey',
    'panda',
    'pig',
    'rabbit',
    'rhino',
    'snake',
    'tiger',
    'walrus',
  ];

  const invalidNames = ['fakeName', '', undefined, null];

  avatarNames.forEach((key) => {
    it(`Renders the ${key} avatar`, () => {
      const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
      const { name, svg } = getAvatarByName(key);
      const { container } = render(svg);
      expect(name).toBe(capitalizedKey);
      expect(container.firstChild.nodeName).toBe('svg');
      expect(container.firstChild.innerHTML).toBe(`${key}.svg`);
    });
  });

  invalidNames.forEach((key) => {
    it(`Renders the default avatar when key is "${key}"`, () => {
      const { name, svg } = getAvatarByName(key);
      const { container } = render(svg);
      expect(name).toBe('Default');
      expect(container.firstChild.nodeName).toBe('svg');
      expect(container.firstChild.innerHTML).toBe(`incognito.svg`);
    });
  });
});
