import React from 'react';

import Search from './Search';
import List from './List';
import VideoFocus from './VideoFocus';

class WorkoutVideos extends React.Component {
  render() {
    return (
      <div className="workout-videos-wrapper">

        <div className="workout-videos-inner">
          <div className="list-container">
            <Search />
            <List />
          </div>
          <div className="video-links-container">
            <VideoFocus />
          </div>
        </div>

        <div className="workout-videos-inner-mobile">
          <div className="list-container-mobile">
            <List />
          </div>
          <div className="ten wide column video-links-container-mobile">
            <VideoFocus />
            <Search />
          </div>
        </div>

      </div>
    )
  }
}

export default WorkoutVideos;
