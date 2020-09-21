import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import VideoPlayer from '../../components/Video/Player';
import useVideoFetch from '../../utils/hooks/useVideoFetch';

const Container = styled.section`
  min-width: 75vw;
  min-height: 77vh;
  max-height: 700px;
  max-width: 1100px;
`;

function PlayerPage() {
  const videoId = window.location.search.slice(3);
  const videoData = useVideoFetch(videoId);
  const history = useHistory();

  console.log(videoData);

  if (videoData.error) {
    history.push('/404');
  }

  if (!videoData.response) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <VideoPlayer {...videoData.response} />
    </Container>
  );
}

export default PlayerPage;
