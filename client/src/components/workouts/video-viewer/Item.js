import React from 'react';

const Item = ({ video, onVideoSelect }) => {
  return (
    <div className="workout-video-item-component" onClick={() => onVideoSelect(video)}>
      <div className="item-video-title">
        <div className="card-body">
          <h5 className="card-title">{video.snippet.title}</h5>
        </div>
      </div>
      <hr className="mx-3" />
      <div className="col-md-4 item-individual">
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      </div>
    </div>
  )
}

export default Item;
