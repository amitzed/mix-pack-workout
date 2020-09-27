import React from 'react';

import Item from './Item';

const List = ( {videos, onVideoSelect} ) => {
  const renderedList = videos.map( (video) => {
    return <Item key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
  });

  return (
    <div className="workout-video-item-component-container">
      {renderedList}
    </div>
  )
}

export default List;
