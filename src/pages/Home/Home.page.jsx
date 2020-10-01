import React, { useRef } from 'react';
import styled from 'styled-components';

import GetQueryParam from '../../utils/getQueryParams';
import VideoList from '../../components/Video/List';
import useVideoFeed from '../../utils/hooks/useVideoFeed';

const Section = styled.section`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const Notice = styled.p`
  color: var(--wizeline-gray-dark);
  font-size: 2rem;
  width: 95%;
  text-align: left;
  margin: auto;
`;

function HomePage() {
  const searchQuery = GetQueryParam('q');
  const { videos } = useVideoFeed({ searchQuery });
  const sectionRef = useRef(null);

  return (
    <>
      <Section ref={sectionRef}>
        <Title>WizeTube</Title>
        {searchQuery && (
          <Notice>Showing search results for &quot;{searchQuery}&quot; </Notice>
        )}
        <VideoList videos={videos} />
      </Section>
    </>
  );
}

export default HomePage;
