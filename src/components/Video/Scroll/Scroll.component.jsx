import React from 'react';
import styled from 'styled-components';
import ScrollCard from '../ScrollCard';
import useVideoFeed from '../../../utils/hooks/useVideoFeed';

const Wrapper = styled.div`
  position: relative;
  padding: 5px 5px;
  height: 850px;
  overflow: auto;
  @media (max-width: 1780px) {
    height: 900px;
  }
  @media (max-width: 930px) {
    width: 100vw;
    height: fit-content;
  }
`;

const Container = styled.div`
  @media (max-width: 930px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    margin: auto;
  }
`;

function Scroll(props) {
  const videoFeed = useVideoFeed({ relatedId: props.videoId });
  const videos = videoFeed.videos.map((video) => {
    return <ScrollCard {...video} key={video.videoId} />;
  });

  return (
    <Wrapper>
      <Container>{videos}</Container>
    </Wrapper>
  );
}

export default Scroll;
