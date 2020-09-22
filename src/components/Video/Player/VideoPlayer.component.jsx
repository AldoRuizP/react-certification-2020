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
`;
const ChannelDetails = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  margin-top: 10px;
  border-top: 1px solid gray;
  padding-top: 10px;
`;
const ChannelIcon = styled.div`
  border: 1px solid black;
  height: 75px;
  width: 75px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background-color: white;
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
`;
const TimeStamp = styled.p`
  font-size: 15px;
  padding: 0;
  margin: 0;
  color: gray;
`;
const Description = styled.p`
  margin: 0 0 0 95px;
  padding: 0;
  font-size: 15px;
  justify-content: center;
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
  background-color: gray;
  border-radius: 50%;
  transition: all ease 250ms;

  & svg {
    height: 20px;
    width: 20px;
    fill: ${(props) => (props.isFavorite ? 'gold' : 'white')};
  }

  &:hover {
    transform: scale(2, 2);
    & svg {
    }
  }
`;

function VideoPlayer(props) {
  const [isFavorite, setFavorite] = useState(false);
  const { state, dispatch } = useContext(FavoritesProvider);

  useEffect(() => {
    dispatch({ type: 'LOAD_FROM_STORAGE' });
    const favorite = state.favorites.some((video) => video.videoId === props.videoId);
    console.log(favorite, props.videoId, state.favorites);
    setFavorite(favorite);
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