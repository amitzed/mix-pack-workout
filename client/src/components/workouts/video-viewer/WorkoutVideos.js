import React from 'react';

import youtube from '../../../apis/youtube.js';
import Search from './Search';
import List from './List';
import VideoFocus from './VideoFocus';

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY

class WorkoutVideos extends React.Component {
  state = { videos: [], selectedVideo: null }

  componentDidMount() {
    this.onTextSubmit('stronglifts 5x5');
  }

  onTextSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
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
      <div className="container-lg my-2 workout-videos-wrapper">

        <div className="ui grid workout-videos-inner">
          <div className="ten wide column video-links-container">
            <VideoFocus video={this.state.selectedVideo} />
          </div>
        </div>

        <div className="six wide column list-container">
          <Search onFormSubmit={this.onTextSubmit} />
          <List onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
        </div>

        <div className="ui grid workout-videos-inner-mobile">
          <div className="six wide column list-container-mobile">
            <List onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
          </div>
          <div className="ten wide column video-links-container-mobile">
            <VideoFocus video={this.state.selectedVideo} />
            <Search onFormSubmit={this.onTextSubmit} />
          </div>
        </div>

      </div>
    )
  }
}

export default WorkoutVideos;
