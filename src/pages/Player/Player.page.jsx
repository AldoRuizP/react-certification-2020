import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import VideoPlayer from '../../components/Video/Player';
import Scroll from '../../components/Video/Scroll';
import useVideoFetch from '../../utils/hooks/useVideoFetch';
import GetQueryParam from '../../utils/getQueryParams';

const Container = styled.section`
  min-height: 77vh;
  width: 100%;
  display: flex;
  @media (max-width: 930px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
  }
`;

function PlayerPage() {
  const videoId = GetQueryParam('v');
  const videoData = useVideoFetch(videoId);
  const history = useHistory();

  useEffect(() => {
    if (videoData.error) {
      history.push('/404');
    }
  }, [history, videoData]);

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
