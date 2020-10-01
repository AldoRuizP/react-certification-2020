import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import VideoPlayer from '../../components/Video/Player';
import Scroll from '../../components/Video/Scroll';
import useVideoFetch from '../../utils/hooks/useVideoFetch';

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
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  const videoId = query.get('v');
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
