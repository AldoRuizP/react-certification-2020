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
    return [
      {
        favorites: [
          {
            channelTitle: 'Bleacher Report',
            description: `The Toronto Raptors and Boston Celtics are officially headed to a Game 7 following a wild 2OT finish`,
            publishTime: 'Wed Sep 09 2020',
            thumbnail: 'https://i.ytimg.com/vi/8fETbjg9V-M/hqdefault.jpg',
            title: 'Raptors-Celtics Exchange Some Words After 2OT Game 6',
            url: 'https://www.youtube.com/embed/HdHJ_xmo5DE',
            videoId: 'HdHJ_xmo5DE',
          },
        ],
      },
      jest.fn(),
    ];
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
