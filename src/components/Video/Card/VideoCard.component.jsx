import React from 'react';

function VideoCard(props) {
  function handleClick(event) {
    event.preventDefault();
    window.href = `https://www.youtube.com/watch?v=${props.videoId}`;
  }
  return (
    <div tabIndex="0" role="button" onKeyDown={handleClick} onClick={handleClick}>
      <img src={props.thumbnail} alt="thumbnail" />
      <h2>{props.title}</h2>
      <p>{props.channelTitle}</p>
      <p>{props.publishTime}</p>
    </div>
  );
}

export default VideoCard;
