import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import VideoList from '../../components/Video/List';
import useVideoFeed from '../../utils/hooks/useVideoFeed';
import { useAuth } from '../../providers/Auth';

const Section = styled.section`
  text-align: center;
`;
const Title = styled.h1`
  font-size: 3rem;
  letter-spacing: -2px;
`;
const Subtitle = styled.h2``;

function HomePage() {
  const history = useHistory();
  const [videoList, setVideoList] = useState([]);
  const { videos } = useVideoFeed();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  useEffect(() => {
    setVideoList(videos);
  }, [videos]);

  return (
    <>
      <Section ref={sectionRef}>
        <VideoList videos={videoList} />
        <Title>Hello stranger!</Title>
        {authenticated ? (
          <>
            <Subtitle>Good to have you back</Subtitle>
            <span>
              <Link to="/" onClick={deAuthenticate}>
                ← logout
              </Link>
              <Link to="/secret"> show me something cool →</Link>
            </span>
          </>
        ) : (
          <Link to="/login">Let me in →</Link>
        )}
      </Section>
    </>
  );
}

export default HomePage;
