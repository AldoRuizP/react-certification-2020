import React from 'react';
import { render } from '@testing-library/react';
import ProfilePicture from './ProfilePicture.page';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(() => {
    return {
      profilePicture: 'lion',
    };
  }),
}));

describe('Test the Profile Picture page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<ProfilePicture />);
  });

  it('Should render the page', () => {
    expect(wrapper.container).not.toBeNull();
  });

  it('Should render the page title', () => {
    const title = wrapper.getByText('Choose your preferred image!');
    expect(title).not.toBeNull();
    expect(title.tagName).toBe('H2');
  });

  it('Should render the avatars container', () => {
    const container = wrapper.container.children[0].children[1];
    expect(container.children.length).toBe(25);
  });

  it('Should render a lion avatar', () => {
    const lion = wrapper.getByText('Lion');
    const lionImage = wrapper.getByText('lion.svg');
    expect(lion).not.toBeNull();
    expect(lionImage).not.toBeNull();
    expect(lion.tagName).toBe('P');
    expect(lionImage.tagName).toBe('svg');
  });
});
