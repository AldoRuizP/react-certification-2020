import { storage } from '../../utils/storage';
import { FAVORITE_VIDEOS_KEY } from '../../utils/constants';

const FavoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE': {
      const favorites = state.favorites
        ? state.favorites.concat(action.payload)
        : [action.payload];
      storage.set(FAVORITE_VIDEOS_KEY, JSON.stringify(favorites));
      return {
        ...state,
        favorites,
      };
    }
    case 'REMOVE_FAVORITE': {
      const favorites = state.favorites.filter(
        (video) => video.videoId !== action.payload.videoId
      );
      storage.set(FAVORITE_VIDEOS_KEY, JSON.stringify(favorites));
      return {
        ...state,
        favorites,
      };
    }
    case 'CLEAR_FAVORITES': {
      storage.set(FAVORITE_VIDEOS_KEY, JSON.stringify({}));
      return {
        ...state,
        favorites: [],
      };
    }
    case 'LOAD_FROM_STORAGE': {
      const favorites = storage.get(FAVORITE_VIDEOS_KEY) || [];
      return {
        ...state,
        favorites: favorites.length ? JSON.parse(favorites) : [],
      };
    }
    default:
      return state;
  }
};

export default FavoritesReducer;
