import React from 'react';
import styled from 'styled-components';
import VideoList from '../../components/Video/List';
import { useFavorites } from '../../providers/Favorites';

const Section = styled.section`
  text-align: center;
  width: 100vw;
  max-width: 2000px;
  @media (max-width: 610px) {
    max-width: 95vw;
  }
`;
const Title = styled.h1`
  font-size: 3rem;
  letter-spacing: -2px;
  font-weight: bold;
  color: var(--wizeline-dark);
  text-transform: uppercase;
  display: flex;
  margin-left: 40px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  @media (max-width: 610px) {
    margin: 10px auto;
    justify-content: center;
  }
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
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0px black;
  &:hover {
    cursor: pointer;
    background-color: var(--wizeline-red);
    transform: scale(1.15, 1.15);
  }
  @media (max-width: 610px) {
    position: relative;
    margin: 10px auto;
  }
`;

function FavoritesPage() {
  const [state, dispatch] = useFavorites();

  function handleClick(event) {
    event.preventDefault();
    dispatch({
      type: 'CLEAR_FAVORITES',
      payload: {},
    });
  }

  const videoList =
    state && state.favorites.length ? (
      <VideoList videos={state.favorites} />
    ) : (
      'No favorite videos. Try adding a video to your favorites by clicking on the star under each video.'
    );

  return (
    <>
      <Section>
        <Title>
          <>
            My Favorites
            {state && state.favorites.length ? (
              <Button onClick={handleClick}>Delete all favorites</Button>
            ) : (
              ''
            )}
          </>
        </Title>
        {videoList}
      </Section>
    </>
  );
}

export default FavoritesPage;
