import React from 'react';
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
`;
const Description = styled.div`
  display: grid;
  padding: 5px;
`;
const Thumbnail = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  & img {
    height: 100%;
    transform: scale(1.5, 1.5);
  }
`;
const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 15px;
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
  return (
    <Wrapper>
      <Container>
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

ScrollCard.defaultProps = {
  thumbnail: 'https://i.ytimg.com/vi/8fETbjg9V-M/hqdefault.jpg',
  title: 'Raptors-Celtics Exchange Some Words After 2OT Game 6',
  publishedAt: 'Wed Sep 09 2020',
  channelTitle: 'Bleacher Report',
};

export default ScrollCard;
