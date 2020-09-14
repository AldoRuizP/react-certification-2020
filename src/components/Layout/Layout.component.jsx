import React from 'react';
import NavBar from '../Navigation/NavBar';
import Footer from '../Footer';
import './Layout.styles.css';

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
