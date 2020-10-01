import React, { useReducer, useContext } from 'react';
import FavoritesReducer from './Favorites.reducer';
import { FAVORITE_VIDEOS_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

const favorites = storage.get(FAVORITE_VIDEOS_KEY) || [];
const initialState = { favorites: favorites.length ? JSON.parse(favorites) : [] };
const FavoritesContext = React.createContext();

const FavoritesProvider = ({ children }) => {
  const contextValue = useReducer(FavoritesReducer, initialState);
  return (
    <FavoritesContext.Provider value={contextValue}>{children}</FavoritesContext.Provider>
  );
};

const useFavorites = () => {
  const contextValue = useContext(FavoritesContext);
  return contextValue;
};

export { useFavorites, FavoritesProvider };
