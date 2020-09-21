import { useState, useEffect } from 'react';
import mockData from './videoMockData';

// const API_URL = 'https://www.googleapis.com/youtube/v3/search?';
// const PART = 'snippet';
// const MAX_RESULTS = 12;
// const TYPE = 'video';
// const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

// eslint-disable-next-line no-unused-vars
function useVideoFeed(relatedId) {
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
        url: `https://www.youtube.com/embed/${videoId}`,
      };
    });
  }

  useEffect(() => {
    // let formattedUrl = `${API_URL}part=${PART}&maxResults=${MAX_RESULTS}&type=${TYPE}&key=${API_KEY}`

    // if (relatedId) {
    //   formattedUrl += `&relatedToVideoId=${relatedId}`;
    // }

    // formattedUrl += `&key=${API_KEY}`;

    async function getVideos() {
      try {
        // const response = await fetch(formattedUrl);
        // const resultItems = await response.json();
        // const list = parseVideoList(resultItems.items);
        // setVideos(list);
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
