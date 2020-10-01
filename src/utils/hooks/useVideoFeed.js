import { useState, useEffect } from 'react';
import mockData from './videoMockData';
import parseVideoList from '../parseVideoList';

const API_URL = 'https://www.googleapis.com/youtube/v3/search?';
const PART = 'snippet';
const MAX_RESULTS = 12;
const TYPE = 'video';
const { REACT_APP_YOUTUBE_API_KEY, NODE_ENV } = process.env;

function useVideoFeed(params) {
  const [videos, setVideos] = useState([]);

  const { relatedId, searchQuery } = params;

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
      } catch (error) {
        console.error('Bad fortune: ', error);
      }
    }

    getVideos();
  }, [relatedId, searchQuery]);

  return { videos };
}

export default useVideoFeed;
