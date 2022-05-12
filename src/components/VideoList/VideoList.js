import React from 'react';
import './VideoList.scss';

// import VideoListItem from '../VideoListItem';

// The container for the list of suggested side videos

const VideoList = (props) => {
  return (
    <div className='videos'>
      <h3 className='videos__next'>Next videos</h3>
      {
        props.sideVideo.map(video => 
        <VideoListItem key = {video.id}
        title = {video.title}
        channel = {video.channel}
        image = {video.image}
        />)
    }
    </div>
  )
}

export default VideoList;