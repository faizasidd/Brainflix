import React from 'react';
import './VideoList.scss';

import VideoListItem from '../VideoListItem/VideoListItem';

// The container for the list of suggested side videos

const VideoList = (props) => {

  const videos = props.sideVideo
 
  return (
    <div className='videos'>
      <h2 className='videos__next'>Next videos</h2>
      {
        props.sideVideo.filter(video => video.id !== props.id).map(video =>
        <VideoListItem key={video.id}
        onClick={ () => {props.clickHandler(video.id)}}
        image = {video.image}
        title = {video.title}
        channel = {video.channel}
        />) 
    }
    </div>
  )
}

export default VideoList;