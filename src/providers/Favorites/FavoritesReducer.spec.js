import FavoritesReducer from './Favorites.reducer';

const mockState = { favorites: [] };
const mockPayload = { videoId: 'test' };
const mockAction = {
  type: 'ADD_FAVORITE',
  payload: mockPayload,
};

describe('Test the reducer', () => {
  it('Should add a new item to favorites', () => {
    const result = FavoritesReducer(mockState, mockAction);
    expect(result).toMatchObject({
      favorites: [{ videoId: 'test' }],
    });
  });

  it('Should add a remove an item from favorites', () => {
    const state = FavoritesReducer(mockState, mockAction);
    const result = FavoritesReducer(state, {
      type: 'REMOVE_FAVORITE',
      payload: mockPayload,
    });
    expect(result).toMatchObject({ favorites: [] });
  });

  it('Should add a remove all items from favorites', () => {
    const mockVideos = [
      { videoId: 'video_1' },
      { videoId: 'video_2' },
      { videoId: 'video_3' },
    ];

    let state = { favorites: mockVideos };
    state = FavoritesReducer(state, {
      type: 'ADD_FAVORITE',
      payload: {
        videoId: 'video_4',
      },
    });

    const result = FavoritesReducer(state, { type: 'CLEAR_FAVORITES' });
    expect(result).toMatchObject({ favorites: [] });
  });

  it('Should retrieve all items from favorites', () => {
    const mockVideos = [
      { videoId: 'video_1' },
      { videoId: 'video_2' },
      { videoId: 'video_3' },
    ];

    let state = { favorites: mockVideos };
    state = FavoritesReducer(state, {
      type: 'ADD_FAVORITE',
      payload: {
        videoId: 'video_4',
      },
    });

    const result = FavoritesReducer(state, { type: 'LOAD_FROM_STORAGE' });
    expect(result).toMatchObject({
      favorites: [
        { videoId: 'video_1' },
        { videoId: 'video_2' },
        { videoId: 'video_3' },
        { videoId: 'video_4' },
      ],
    });
  });
});
