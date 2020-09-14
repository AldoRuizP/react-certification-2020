import React from 'react';
import NavBar from '../Navigation/NavBar'

import './Layout.styles.css';

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="container">{children}</main>
      <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
      <p><a href="https://iconscout.com/icon-pack/animal-flat-colors" target="_blank" rel="noopener noreferrer">Animal Flat Colors Icon Pack</a> by <a href="https://iconscout.com/contributors/kerismaker">Kerismaker</a> on <a href="https://iconscout.com">Iconscout</a></p>
    </>
  );
}

export default Layout;
