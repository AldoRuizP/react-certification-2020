import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import VideoList from '../../components/Video/List';
import useVideoFeed from '../../utils/hooks/useVideoFeed';

const Section = styled.section`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

function HomePage() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  const searchQuery = query.get('q');

  const [videoList, setVideoList] = useState([]);
  const { videos } = useVideoFeed({ searchQuery });
  const sectionRef = useRef(null);

  useEffect(() => {
    setVideoList(videos);
  }, [videos]);

  return (
    <>
      <Section ref={sectionRef}>
        <Title>WizeTube</Title>
        <VideoList videos={videoList} />
      </Section>
    </>
  );
}

export default HomePage;
