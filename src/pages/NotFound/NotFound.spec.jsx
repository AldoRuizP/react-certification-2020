import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound.page';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(() => {
    return { authenticated: true };
  }),
}));

describe('Test the not found page renders properly', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
  });

  it('Should render the not found page', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Should have link to the homepage', () => {
    const anchor = wrapper.getByText('home');
    const container = anchor.closest('a');
    expect(anchor).not.toBeNull();
    expect(container.getAttribute('href')).toBe('/');
  });

  it('Should show confused John Travolta', () => {
    const img = wrapper.getByAltText('page not found');
    expect(img).not.toBeNull();
    expect(img.tagName).toBe('IMG');
    expect(img.getAttribute('src')).toBe('404.gif');
  });
});
