import React from 'react';
import styled from 'styled-components';
import ScrollCard from '../ScrollCard';
import useVideoFeed from '../../../utils/hooks/useVideoFeed';

const Wrapper = styled.div`
  position: relative;
  padding: 5px 0;
  height: 850px;
  overflow: auto;
`;

const Container = styled.div``;

function Scroll(props) {
  const videoFeed = useVideoFeed(props.videoId) || { videos: [] };
  let videos = [];

  if (videoFeed.videos && videoFeed.videos.length) {
    videos = videoFeed.videos.map((video) => {
      return <ScrollCard {...video} />;
    });
  }

  return (
    <Wrapper>
      <Container>{videos}</Container>
    </Wrapper>
  );
}

export default Scroll;
