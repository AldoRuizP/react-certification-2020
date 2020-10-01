import React, { useState, useEffect, useContext, useCallback } from 'react';

import { AUTH_STORAGE_KEY, PROFILE_PICTURE } from '../../utils/constants';
import { storage } from '../../utils/storage';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [profilePicture, setProfilePictureState] = useState(undefined);

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);
    const currentPicture = storage.get(PROFILE_PICTURE);
    setProfilePictureState(currentPicture);

    setAuthenticated(isAuthenticated);
  }, []);

  const setProfilePicture = useCallback((newPicture) => {
    storage.set(PROFILE_PICTURE, newPicture);
    setProfilePictureState(newPicture);
  }, []);

  const getProfilePicture = useCallback(() => {
    let avatar = 'incognito';
    if (authenticated) {
      avatar = storage.get(PROFILE_PICTURE);
    }
    return avatar;
  }, [authenticated]);

  const login = useCallback(() => {
    setAuthenticated(true);
    storage.set(AUTH_STORAGE_KEY, true);

    let profilePictureStorage = storage.get(PROFILE_PICTURE);
    if (!profilePictureStorage) {
      storage.set(PROFILE_PICTURE, 'snake');
      profilePictureStorage = 'snake';
    }
    setProfilePictureState(profilePictureStorage);
  }, [setProfilePictureState]);

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
    setProfilePictureState('incognito');
  }, [setProfilePictureState]);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        authenticated,
        setProfilePicture,
        getProfilePicture,
        profilePicture,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
