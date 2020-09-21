import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: inherit;
  width: 75%;
  border: 1px solid black;
`;
const Player = styled.iframe`
  width: 100%;
  height: 75%;
  border: none;
`;
const Details = styled.div``;
const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 20px;
`;
const Channel = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 18px;
  position: relative;
  right: 0;
`;
const TimeStamp = styled.p``;
const Description = styled.p``;

function VideoPlayer(props) {
  return (
    <Container>
      <Player src={props.url} title={props.title} />
      <Details>
        <Title>{props.title}</Title>
        <Channel>By: {props.channelTitle}</Channel>
        <TimeStamp>{props.publishTime}</TimeStamp>
        <Description>{props.description}</Description>
      </Details>
    </Container>
  );
}

export default VideoPlayer;
