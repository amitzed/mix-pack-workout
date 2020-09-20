import React from 'react';

import youtube from '../../../apis/youtube.js';
import Search from './Search';
import List from './List';
import VideoFocus from './VideoFocus';

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY

class WorkoutVideos extends React.Component {
  state = { videos: [], selectedVideo: null }

  componentDidMount() {
    this.onTextSubmit('stronglifts 5x5')
  }

  onTextSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: "snippet",
        maxResults: 8,
        type: 'video',
        key: KEY
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

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
