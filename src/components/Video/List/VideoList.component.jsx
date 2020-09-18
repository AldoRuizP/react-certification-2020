import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import VideCard from '../Card';

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  width: 95%;
`;

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  margin-top: 2rem;
`;
function VideoList(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (props.videos) {
      const formatted = props.videos.map((video) => (
        <VideCard {...video} key={video.videoId} />
      ));
      setList(formatted);
    }
  }, [props.videos]);

  return (
    <Wrapper>
      <List>{list}</List>
    </Wrapper>
  );
}

export default VideoList;
