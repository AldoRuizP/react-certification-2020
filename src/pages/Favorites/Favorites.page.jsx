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
  font-weight: bold;
  color: var(--wizeline-dark);
  text-transform: uppercase;
  display: flex;
  margin-left: 40px;
`;
const Button = styled.button`
  width: 200px;
  height: 35px;
  background: white;
  font-size: 20px;
  margin: 20px 0;
  background-color: var(--wizeline-red-light);
  border: none;
  transition: 250ms ease all;
  right: 0;
  margin-top: 10px;
  margin-right: 40px;
  position: absolute;
  &:hover {
    cursor: pointer;
    background-color: var(--wizeline-red);
    transform: scale(1.15, 1.15);
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

  function checkVideosList() {
    let components;

    if (state.favorites.length) {
      components = <VideoList videos={state.favorites} />;
    } else {
      components = 'No favorite videos. Try adding a video to your favorites.';
    }

    return components;
  }

  return (
    <>
      <Section>
        <Title>
          <>
            My Favorites
            {state.favorites.length ? (
              <Button onClick={handleClick}>Delete all favorites</Button>
            ) : (
              ''
            )}
          </>
        </Title>
        {checkVideosList()}
      </Section>
    </>
  );
}

export default FavoritesPage;
