import React from 'react';

const Item = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item workout-video-item-component">
      <img
        className="ui image item-individual"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <hr />
      <div className="content item-video-title">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>

  )
}

export default Item;
