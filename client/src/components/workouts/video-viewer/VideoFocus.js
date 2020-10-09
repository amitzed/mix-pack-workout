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
    <div>
      <div className="ui embed workout-video-focus-wrapper" data-aos="flip-up">
        <iframe className="embed-responsive-item" src={videoSource} title="Video Player" />
      </div>
      <hr />
      <div className="ui segment">
        <h4>{video.snippet.title}</h4>
        <h6>{video.snippet.description}</h6>
      </div>
    </div>

  )
}

export default VideoFocus;
