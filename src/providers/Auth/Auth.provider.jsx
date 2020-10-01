import React, { useState, useContext, useCallback } from 'react';

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
  const [authenticated, setAuthenticated] = useState(() => storage.get(AUTH_STORAGE_KEY));
  const [profilePicture, setProfilePictureState] = useState(() =>
    storage.get(PROFILE_PICTURE)
  );

  const setProfilePicture = useCallback((newPicture) => {
    storage.set(PROFILE_PICTURE, newPicture);
    setProfilePictureState(newPicture);
  }, []);

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
        profilePicture,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
