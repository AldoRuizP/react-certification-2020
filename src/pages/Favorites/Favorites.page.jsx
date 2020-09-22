import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import VideoList from '../../components/Video/List';
import FavoritesProvider from '../../providers/Favorites';

const Section = styled.section`
  text-align: center;
`;
const Title = styled.h1`
  font-size: 3rem;
  letter-spacing: -2px;
`;
const Button = styled.button`
  width: 200px;
  height: 35px;
  background: white;
  border: 1px solid black;
  font-size: 20px;
  margin: 20px 0;
  &:hover {
    cursor: pointer;
    background-color: red;
  }
`;

function FavoritesPage() {
  const { state, dispatch } = useContext(FavoritesProvider);

  useEffect(() => {
    dispatch({ type: 'LOAD_FROM_STORAGE' });
  }, [dispatch]);

  function handleClick(event) {
    event.preventDefault();
    dispatch({
      type: 'CLEAR_FAVORITES',
      payload: {},
    });
  }

  return (
    <>
      <Section>
        <Title>My Favorites</Title>
        <Button onClick={handleClick}>Delete favorites</Button>
        {state.favorites.length && <VideoList videos={state.favorites} />}
      </Section>
    </>
  );
}

export default FavoritesPage;
