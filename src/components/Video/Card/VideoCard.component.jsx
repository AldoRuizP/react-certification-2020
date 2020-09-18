import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.div`
  background: black;
  height: inherit;
  overflow: hidden;

  & img {
    height: 100%;
    margin-top: -50px;
    transition: 300ms;
    transform: scale(0.75) translateX(-89px) translateY(-40px);
  }
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  background: white;
  width: -webkit-fill-available;
  text-align: center;
  height: 120px;
  padding: 20px 30px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333333;
  margin: 0;
  padding: 0;
  height: 88px;
  overflow: hidden;
`;

const Channel = styled.p`
  margin: 0 0 10px 0;
  padding: 0;
  font-size: 18px;
  font-weight: 500;
  color: #e74c3c;
`;

const Details = styled.div`
  display: none;
  & a {
    float: left;
    padding: 7px 15px;
    font-size: 17px;
    background: #e74c3c;
    color: white;
    font-weight: 500;
    border: none;
    margin: 0;
    cursor: pointer;
    transition: 300ms ease;
    &:hover {
      transform: scale(0.9);
      background: #e64533;
    }
  }
`;

const Description = styled.p`
  color: #666666;
  font-size: 16px;
  text-align: justify;
  padding: 0;
  margin: 0 0 10px 0;
  line-height: 20px;
  height: 80px;
  overflow: hidden;
`;

const Timestamp = styled.p`
  padding: 0;
  margin: 0;
  text-align: right;
  font-size: 13px;
  width: fit-content;
  position: absolute;
  bottom: 18px;
  right: 30px;
  color: #666666;
`;

const Card = styled.div`
  position: relative;
  height: 350px;
  width: 335px;
  display: block;
  background: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  transition: 400ms linear;
  margin: 10px auto;

  &:hover {
    box-shadow: 0 1px 35px 0 rgba(0, 0, 0, 0.3);

    & ${Title} {
      font-size: 18px;
      height: fit-content;
      text-align: left;
    }

    & ${Channel} {
      font-size: 16px;
      text-align: left;
      padding-top: 5px;
    }

    & ${Thumbnail} img {
      transform: scale(1) translateX(-50px) translateY(-50px);
      opacity: 0.6;
    }

    & ${Details} {
      display: block;
    }

    & ${Content} {
      height: fit-content;
    }
  }
`;

function VideoCard(props) {
  function handleClick(event) {
    event.preventDefault();
    window.href = props.url;
  }
  return (
    <Card tabIndex="0" role="button" onKeyDown={handleClick} onClick={handleClick}>
      <Thumbnail>
        <img src={props.thumbnail} alt={`${props.title}`} />
      </Thumbnail>
      <Content>
        <Title>{props.title}</Title>
        <Channel>{props.channelTitle}</Channel>
        <Details>
          <Description>{props.description}</Description>
          <Timestamp>{props.publishTime}</Timestamp>
          <a href={props.url} rel="noreferrer" target="_blank">
            Watch
          </a>
        </Details>
      </Content>
    </Card>
  );
}

export default VideoCard;
