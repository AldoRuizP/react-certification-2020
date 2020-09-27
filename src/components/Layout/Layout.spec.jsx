import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout.component';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(() => {
    return {
      profilePicture: 'lion',
      authenticated: 'true',
    };
  }),
}));

describe('Test the layout renders properly', () => {
  let children;

  beforeEach(() => {
    const { container } = render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
    children = container.children;
  });

  it('Should render the layout with three children', () => {
    expect(children.length).toBe(3);
  });

  it('Should render a navbar as the first children', () => {
    expect(children[0].tagName).toBe('NAV');
  });

  it('Should render a main section as the second children', () => {
    expect(children[1].tagName).toBe('MAIN');
  });

  it('Should render a footer as the third children', () => {
    expect(children[2].tagName).toBe('FOOTER');
  });
});
