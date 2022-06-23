import React, { Component } from 'react';
import './VideoList.scss';
import VideoListItem from '.././VideoListItem/VideoListItem';

// The container for the list of suggested side videos

class VideoList extends Component {

  render () {
 
  return (
    <div className='videos'>
      <h3 className='videos__next'>Next videos</h3>
      {
        this.props.videos.map(video => 
        <VideoListItem key={video.id} {...video} />)
    }
    </div>
  )
}
}

export default VideoList;
