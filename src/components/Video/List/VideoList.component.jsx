import React, { useEffect, useState } from 'react';
import VideCard from '../Card';

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

  return <div>{list}</div>;
}

export default VideoList;
