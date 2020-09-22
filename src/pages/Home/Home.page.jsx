import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

import VideoList from '../../components/Video/List';
import useVideoFeed from '../../utils/hooks/useVideoFeed';

const Section = styled.section`
  text-align: center;
`;

function HomePage() {
  const [videoList, setVideoList] = useState([]);
  const { videos } = useVideoFeed();
  const sectionRef = useRef(null);

  useEffect(() => {
    setVideoList(videos);
  }, [videos]);

  return (
    <>
      <Section ref={sectionRef}>
        <VideoList videos={videoList} />
      </Section>
    </>
  );
}

export default HomePage;
