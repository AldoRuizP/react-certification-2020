import React from 'react';
import styled from 'styled-components';
import ScrollCard from '../ScrollCard';
import useVideoFeed from '../../../utils/hooks/useVideoFeed';

const Wrapper = styled.div`
  position: relative;
  padding: 5px 5px;
  height: 850px;
  overflow: auto;
`;

const Container = styled.div``;

function Scroll(props) {
  const videoFeed = useVideoFeed({ relatedId: props.videoId }) || { videos: [] };
  let videos = [];

  if (videoFeed.videos && videoFeed.videos.length) {
    videos = videoFeed.videos.map((video) => {
      return <ScrollCard {...video} key={video.videoId} />;
    });
  }

  return (
    <Wrapper>
      <Container>{videos}</Container>
    </Wrapper>
  );
}

export default Scroll;
