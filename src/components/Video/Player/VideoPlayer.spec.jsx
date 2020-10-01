import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VidePlayer from './VideoPlayer.component';

jest.mock('../../../providers/Auth', () => ({
  useAuth: jest.fn(() => {
    return {};
  }),
}));

jest.mock('../../../providers/Favorites/Favorites.provider', () => ({
  useFavorites: jest.fn(() => {
    return [[], jest.fn()];
  }),
}));

it('Should render the video player', () => {
  const wrapper = render(
    <BrowserRouter>
      <VidePlayer />
    </BrowserRouter>
  );
  expect(wrapper).not.toBeNull();
});
