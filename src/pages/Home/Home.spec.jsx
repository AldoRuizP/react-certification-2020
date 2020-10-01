import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home.page';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(() => {
    return {};
  }),
}));

jest.mock('../../providners/Favorites/Favorites.provider', () => ({
  useFavorites: jest.fn(() => {
    return [{ favorites: [] }, jest.fn()];
  }),
}));

it('Should render the favorites page', () => {
  const wrapper = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  expect(wrapper).not.toBeNull();
});
