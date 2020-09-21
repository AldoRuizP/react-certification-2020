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

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row;
  overflow: hidden;
  border: 1px solid black;
  border-radius: 20px;
  cursor: pointer;
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
