import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import { FavoritesProvider } from '../../providers/Favorites';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import PlayerPage from '../../pages/Player';
import ProfilePicture from '../../pages/ProfilePicture';
import FavoritesPage from '../../pages/Favorites';
import Private from '../Private';
import Layout from '../Layout';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <FavoritesProvider>
          <Layout>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Private exact path="/profile-picture">
                <ProfilePicture />
              </Private>
              <Private exact path="/favorites">
                <FavoritesPage />
              </Private>
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/watch" component={PlayerPage} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </FavoritesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
