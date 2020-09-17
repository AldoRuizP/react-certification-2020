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

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);

    setAuthenticated(isAuthenticated);
  }, []);

  const setProfilePicture = useCallback((newPicture) => {
    storage.set(PROFILE_PICTURE, newPicture);
  }, []);

  const getProfilePicture = useCallback(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);
    let avatar = 'incognito';
    if (isAuthenticated) {
      avatar = storage.get(PROFILE_PICTURE);
    }
    return avatar;
  }, []);

  const login = useCallback(() => {
    setAuthenticated(true);
    storage.set(AUTH_STORAGE_KEY, true);

    const profilePicture = storage.get(PROFILE_PICTURE);
    if (!profilePicture) {
      storage.set(PROFILE_PICTURE, 'snake');
    }
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, authenticated, setProfilePicture, getProfilePicture }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
