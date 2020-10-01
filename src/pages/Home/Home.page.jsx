import React, { useRef } from 'react';
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

const Notice = styled.p`
  color: var(--wizeline-gray-dark);
  font-size: 2rem;
  width: 95%;
  text-align: left;
  margin: auto;
`;

function HomePage() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  const searchQuery = query.get('q');
  const sanitizedQuery = searchQuery && searchQuery.slice(0);
  const { videos } = useVideoFeed({ searchQuery });
  const sectionRef = useRef(null);

  return (
    <>
      <Section ref={sectionRef}>
        <Title>WizeTube</Title>
        {sanitizedQuery && (
          <Notice>Showing search results for &quot;{sanitizedQuery}&quot; </Notice>
        )}
        <VideoList videos={videos} />
      </Section>
    </>
  );
}

export default HomePage;
