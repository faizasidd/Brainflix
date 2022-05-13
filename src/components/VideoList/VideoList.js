import React from 'react';
import './VideoList.scss';

import VideoListItem from '../VideoListItem/VideoListItem';

// The container for the list of suggested side videos

const VideoList = (props) => {

  const videos = props.sideVideo
 
  return (
    <div className='videos'>
      <h3 className='videos__next'>Next videos</h3>
      {
        props.sideVideo.map(video => 
        <VideoListItem clickHandler = {props.clickHandler}
        key = {video.id}
        id = {video.id}
        title = {video.title}
        channel = {video.channel}
        image = {video.image}
        description = {video.description}
        likes = {video.likes}
        views = {video.views}
        duration = {video.duration}

        />) 
    }
    </div>
  )
}

export default VideoList;