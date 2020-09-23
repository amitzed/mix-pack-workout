import React from 'react';

const VideoFocus = ({ video }) => {
  if(!video) {
    return (
      <div className="spinner-grow text-primary">
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="jumbotron workout-video-focus-wrapper" >
      <div className="embed-responsive embed-responsive-16by9">
        {/* <iframe className="embed-responsive-item" src={videoSource} title="Video Player" /> */}
      </div>
      <hr className="my-3" />
      <div className="lead">
        VideoFocus.js - Video-Viewer
        <h4>{video.snippet.title}</h4>
        <h6>{video.snippet.description}</h6>
      </div>
    </div>
  )
}

export default VideoFocus;
