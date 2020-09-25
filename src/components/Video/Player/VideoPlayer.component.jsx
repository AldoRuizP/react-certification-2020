import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import FavoritesProvider from '../../../providers/Favorites';

import { Favorite as FavoriteIcon } from '../../Icons/navigation';
import { AVATAR_MAP } from '../../Icons/avatars';

const Container = styled.div`
  height: inherit;
  width: 74%;
`;
const Player = styled.iframe`
  width: 100%;
  height: 600px;
  border: none;
`;
const Details = styled.div`
  padding: 10px 10px;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 20px;
  color: var(--wizeline-dark);
`;
const ChannelDetails = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  margin-top: 10px;
  border-top: 1px solid var(--wizeline-gray);
  padding-top: 10px;
`;
const ChannelIcon = styled.div`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background-color: var(--wizeline-magenta);
  & svg {
    height: 75%;
  }
`;
const ChannelText = styled.div`
  padding-left: 20px;
`;
const Channel = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 18px;
  position: relative;
  right: 0;
  color: var(--wizeline-blue-dark);
`;
const TimeStamp = styled.p`
  font-size: 15px;
  padding: 0;
  margin: 0;
  color: var(--wizeline-gray-dark);
`;
const Description = styled.p`
  margin: 0 0 0 95px;
  padding: 0;
  font-size: 15px;
  justify-content: center;
  color: var(--wizeline-dark);
`;
const Favorite = styled.span`
  margin-left: auto;
  margin-right: 10px;
  height: 30px;
  width: 30px;
  font-size: 5px;
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: 50%;
  transition: all ease 250ms;

  & svg {
    height: 20px;
    width: 20px;
    fill: ${(props) =>
      props.isFavorite ? `var(--wizeline-gold)` : `var(--wizeline-gray-dark)`};
  }

  &:hover {
    transform: scale(1.5, 1.5);
  }
`;

function VideoPlayer(props) {
  const [isFavorite, setFavorite] = useState(false);
  const { state, dispatch } = useContext(FavoritesProvider);

  useEffect(() => {
    dispatch({ type: 'LOAD_FROM_STORAGE' });
    const favorite =
      state.favorites &&
      state.favorites.length > 0 &&
      state.favorites.some((video) => video.videoId === props.videoId);
    setFavorite(favorite);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleFormClick(event) {
    event.preventDefault();
    const {
      videoId,
      title,
      channelTitle,
      publishTime,
      publishedAt,
      thumbnail,
      description,
      url,
    } = props;

    if (isFavorite) {
      dispatch({
        type: 'REMOVE_FAVORITE',
        payload: {
          videoId,
        },
      });
    } else {
      dispatch({
        type: 'ADD_FAVORITE',
        payload: {
          videoId,
          title,
          channelTitle,
          publishTime: publishTime || publishedAt,
          thumbnail,
          description,
          url,
        },
      });
    }

    setFavorite(!isFavorite);
  }

  return (
    <Container>
      <Player src={props.url} title={props.title} />
      <Details>
        <Title>{props.title}</Title>
        <ChannelDetails>
          <ChannelIcon>{AVATAR_MAP.cat.svg}</ChannelIcon>
          <ChannelText>
            <Channel>{props.channelTitle}</Channel>
            <TimeStamp>{props.publishedAt}</TimeStamp>
          </ChannelText>
          <Favorite onClick={handleFormClick} isFavorite={isFavorite}>
            <FavoriteIcon />
          </Favorite>
        </ChannelDetails>
        <Description>{props.description}</Description>
      </Details>
    </Container>
  );
}

export default VideoPlayer;
