import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import PlayerPage from '../../pages/Player';
import ProfilePicture from '../../pages/ProfilePicture';
import FavoritesPage from '../../pages/Favorites';
import Private from '../Private';
import Layout from '../Layout';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/watch">
              <PlayerPage />
            </Route>
            <Private exact path="/secret">
              <SecretPage />
            </Private>
            <Private exact path="/profile-picture">
              <ProfilePicture />
            </Private>
            <Private exact path="/favorites">
              <FavoritesPage />
            </Private>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
