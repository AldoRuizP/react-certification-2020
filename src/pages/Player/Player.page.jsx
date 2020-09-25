import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import VideoPlayer from '../../components/Video/Player';
import Scroll from '../../components/Video/Scroll';
import useVideoFetch from '../../utils/hooks/useVideoFetch';

const Container = styled.section`
  min-height: 77vh;
  width: 100%;
  display: flex;
`;

function PlayerPage() {
  const videoId = window.location.search.slice(3);
  const videoData = useVideoFetch(videoId);
  const history = useHistory();

  if (videoData.error) {
    history.push('/404');
  }

  if (!videoData.response) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <VideoPlayer {...videoData.response} />
      <Scroll videoId={videoId} />
    </Container>
  );
}

export default PlayerPage;
