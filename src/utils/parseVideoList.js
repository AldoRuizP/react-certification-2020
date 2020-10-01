import decodeHTMLEntities from './escapeHTML';

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

export default parseVideoList;
