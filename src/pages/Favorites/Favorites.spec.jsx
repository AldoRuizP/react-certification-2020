import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Favorites from './Favorites.page';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(() => {
    return {};
  }),
}));

jest.mock('../../providers/Favorites/Favorites.provider', () => ({
  useFavorites: jest.fn(() => {
    return [{ favorites: [] }, jest.fn()];
  }),
}));

it('Should render the favorites page', () => {
  const wrapper = render(
    <BrowserRouter>
      <Favorites />
    </BrowserRouter>
  );
  expect(wrapper).not.toBeNull();
});
