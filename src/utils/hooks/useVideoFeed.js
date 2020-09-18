import { useState, useEffect } from 'react';
import mockData from './videoMockData';

// const API_URL = 'https://www.googleapis.com/youtube/v3/search?';
// const PART = 'snippet';
// const MAX_RESULTS = 10;
// const TYPE = 'video';

function useVideoFeed() {
  const [videos, setVideos] = useState(null);

  function parseVideoList(items) {
    return items.map((item) => {
      const { videoId } = item.id;
      const { title, channelTitle, publishTime, description } = item.snippet;
      const thumbnail = item.snippet.thumbnails.high.url;
      return {
        videoId,
        title,
        channelTitle,
        publishTime: new Date(publishTime).toDateString(),
        thumbnail,
        description,
        url: `https://www.youtube.com/watch?v=${videoId}`,
      };
    });
  }

  useEffect(() => {
    // const formattedUrl = `${API_URL}part=${PART}&maxResults=${MAX_RESULTS}&type=${TYPE}&key=${API_KEY}`;
    async function getVideos() {
      try {
        // const response = await fetch(formattedUrl);
        // const resultItems = await response.json();
        // const list = parseVideoList(resultItems.items);
        // setVideos(list[0]);
        const resultItems = mockData;
        const list = parseVideoList(resultItems.items);
        setVideos(list);
      } catch (error) {
        console.error('Bad fortune: ', error);
      }
    }

    getVideos();
  }, []);

  return { videos };
}

export default useVideoFeed;
