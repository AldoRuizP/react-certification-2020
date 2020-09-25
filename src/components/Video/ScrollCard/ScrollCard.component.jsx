import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100px;
  width: 355px;
  display: grid;
  place-items: center;
  padding: 5px 10px 5px 10px;
`;

const Description = styled.div`
  display: grid;
  padding: 5px;
  width: -webkit-fill-available;
`;
const Thumbnail = styled.div`
  height: 100%;
  width: 300px;
  overflow: hidden;
  & img {
    height: 100%;
    transform: scale(1.5, 1.5);
    transition: all ease 500ms;
  }
`;
const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 13px;
`;
const Timestamp = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
`;
const Channel = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
`;

const WatchNow = styled.div`
  display: none;
  z-index: 1;
  position: absolute;
  background-color: white;
  height: 100%;
  width: 50%;
  transition: all ease 500ms;
  font-weight: bold;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row;
  overflow: hidden;
  cursor: pointer;
  background-color: white;

  &:hover {
    transform: scale(1.025, 1.025);
    border-radius: 20px;

    & ${Thumbnail} {
      position: absolute;
      right: 0;

      & img {
        transform: translateX(110%) scale(1.5, 1.5);
        z-index: 10;
      }
    }

    & ${WatchNow} {
      display: grid;
      background-color: var(--wizeline-dark);
      color: white;
      place-items: center;
    }
  }
`;
function ScrollCard(props) {
  const history = useHistory();

  function handleClick() {
    history.push(`/watch?v=${props.videoId}`);
    history.go(0);
  }

  return (
    <Wrapper>
      <Container role="button" onKeyDown={handleClick} onClick={handleClick}>
        <Thumbnail>
          <img src={props.thumbnail} alt={props.title} />
        </Thumbnail>
        <WatchNow>Watch Now</WatchNow>
        <Description>
          <Title>{props.title}</Title>
          <Channel>{props.channelTitle}</Channel>
          <Timestamp>{props.publishedAt}</Timestamp>
        </Description>
      </Container>
    </Wrapper>
  );
}

export default ScrollCard;
