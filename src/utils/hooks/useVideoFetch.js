import { useState, useEffect } from 'react';
import videoMockFile from './videoMockFile';

const { REACT_APP_YOUTUBE_API_KEY, REACT_APP_DEV_API } = process.env;

const useVideoFetch = (videoId) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const parseResponse = (obj) => {
      const {
        publishedAt,
        title,
        description,
        channelTitle,
        tags,
        thumbnails,
      } = obj.items[0].snippet;
      return {
        publishedAt: new Date(publishedAt).toDateString(),
        title,
        description,
        channelTitle,
        tags,
        url: `https://www.youtube.com/embed/${videoId}`,
        videoId,
        thumbnail: thumbnails.high.url,
      };
    };

    const fetchData = async () => {
      try {
        let parsedJson;
        if (REACT_APP_DEV_API) {
          parsedJson = parseResponse(videoMockFile);
        } else {
          const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${REACT_APP_YOUTUBE_API_KEY}`;
          const res = await fetch(API_URL, {});
          const json = await res.json();
          parsedJson = parseResponse(json);
        }
        setResponse(parsedJson);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [videoId]);

  return { response, error };
};

export default useVideoFetch;
