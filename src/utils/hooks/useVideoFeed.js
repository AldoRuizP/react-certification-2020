import { useState, useEffect } from 'react';
import mockData from './videoMockData';
import decodeHTMLEntities from '../escapeHTML';

const API_URL = 'https://www.googleapis.com/youtube/v3/search?';
const PART = 'snippet';
const MAX_RESULTS = 12;
const TYPE = 'video';
const { REACT_APP_YOUTUBE_API_KEY, NODE_ENV } = process.env;

// eslint-disable-next-line no-unused-vars
function useVideoFeed(params) {
  const [videos, setVideos] = useState(null);

  const { relatedId, searchQuery } = params;

  function parseVideoList(items) {
    return items.map((item) => {
      const { videoId } = item.id;
      const { title, channelTitle, publishTime, description } = item.snippet;
      const thumbnail = item.snippet.thumbnails.high.url;
      return {
        videoId,
        title: decodeHTMLEntities(title),
        channelTitle,
        publishTime: new Date(publishTime).toDateString(),
        thumbnail,
        description: decodeHTMLEntities(description),
        url: `https://www.youtube.com/embed/${videoId}`,
      };
    });
  }

  useEffect(() => {
    let formattedUrl = `${API_URL}part=${PART}&maxResults=${MAX_RESULTS}&type=${TYPE}`;

    if (relatedId) {
      formattedUrl += `&relatedToVideoId=${relatedId}`;
    }

    if (searchQuery) {
      formattedUrl += `&q=${searchQuery}`;
    }

    formattedUrl += `&key=${REACT_APP_YOUTUBE_API_KEY}`;

    async function getVideos() {
      try {
        let list;
        if (NODE_ENV !== 'production') {
          const resultItems = mockData;
          list = parseVideoList(resultItems.items);
        } else {
          const response = await fetch(formattedUrl);
          const resultItems = await response.json();
          list = parseVideoList(resultItems.items);
        }
        setVideos(list);
        setVideos(list);
      } catch (error) {
        console.error('Bad fortune: ', error);
      }
    }

    getVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { videos };
}

export default useVideoFeed;
