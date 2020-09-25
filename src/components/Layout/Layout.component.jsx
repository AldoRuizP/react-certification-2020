import React from 'react';
import styled from 'styled-components';
import NavBar from '../Navigation/NavBar';
import Footer from '../Footer';

const Main = styled.main`
  width: 100vw;
  min-height: 90vh;
  max-width: 2000px;
  display: grid;
  place-items: center;
  margin: auto;
`;

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default Layout;
