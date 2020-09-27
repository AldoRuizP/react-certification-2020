import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar.component';
import { useAuth } from '../../../providers/Auth';

jest.mock('../../../providers/Auth', () => ({
  useAuth: jest.fn(() => {
    return {};
  }),
}));

describe('Test the navbar renders properly', () => {
  let children;
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    children = wrapper.container.children;
  });

  it('Should render the navbar with two children', () => {
    expect(children[0].children.length).toBe(2);
  });

  it('Should render the site logo', () => {
    const logo = wrapper.getByText('wizeline_logo.svg');
    expect(logo).not.toBeNull();
    expect(logo.tagName).toBe('svg');
  });

  it('Should render the site brand name', () => {
    const logo = wrapper.getByText('wizeline_header_light.svg');
    expect(logo).not.toBeNull();
    expect(logo.tagName).toBe('svg');
  });

  it('Should render a menu', () => {
    expect(children[0].children[1].tagName).toBe('MENU');
  });

  it('Should render childs for the menu', () => {
    const menu = children[0].children[1];
    expect(menu.children.length).toBeGreaterThanOrEqual(1);
  });
});

describe('Test navbar shows the proper avatar', () => {
  it('Should show the incognito avatar when not logged in', () => {
    useAuth.mockImplementation(() => {
      return {
        authenticated: false,
        profilePicture: 'lion',
      };
    });
    const wrapper = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const incognitoIcon = wrapper.queryByText('incognito.svg');
    const lionIcon = wrapper.queryByText('lion.svg');
    expect(incognitoIcon).not.toBeNull();
    expect(lionIcon).toBeNull();
  });

  it('Should show the correct user avatar when logged in', () => {
    useAuth.mockImplementation(() => {
      return {
        authenticated: true,
        profilePicture: 'lion',
      };
    });
    const wrapper = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const incognitoIcon = wrapper.queryByText('incognito.svg');
    const lionIcon = wrapper.queryByText('lion.svg');
    expect(lionIcon).not.toBeNull();
    expect(incognitoIcon).toBeNull();
  });
});
