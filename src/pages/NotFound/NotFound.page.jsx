import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundSection = styled.section``;

const HomeLink = styled.p`
  font-size: 1rem;
  text-decoration: none;
  display: block;
  text-align: right;
  padding: 0.2rem 0.3rem;
  color: black;
  position: absolute;
  left: 0;

  &::before {
    content: '←';
    padding-right: 0.2rem;
    display: inline-block;
  }
`;

function NotFoundPage() {
  return (
    <NotFoundSection>
      <Link to="/">
        <HomeLink>home</HomeLink>
      </Link>
      <img src="404.gif" alt="page not found" />
    </NotFoundSection>
  );
}

export default NotFoundPage;
