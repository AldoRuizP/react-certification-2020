import React from 'react';
import NavBar from '../Navigation/NavBar';
import Footer from '../Footer';
import './Layout.styles.css';

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="layout-container">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
