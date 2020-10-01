import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Player from './Player.page';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(() => {
    return {};
  }),
}));

jest.mock('../../providers/Favorites/Favorites.provider', () => ({
  useFavorites: jest.fn(() => {
    return [[], jest.fn()];
  }),
}));

it('Should render the player page', () => {
  const wrapper = render(
    <BrowserRouter>
      <Player />
    </BrowserRouter>
  );
  expect(wrapper).not.toBeNull();
});
