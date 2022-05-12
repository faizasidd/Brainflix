import React from 'react';
import './VideoListItem.scss';

// A component for a suggested video item

const VideoListItem = (props) => {
  return (
    <div className='video-item'>
      <img
        className='video-item__img'
        src={props.sideVideo.image}
        alt='The video image' />
      <div className='video-item__right'>
        <h3 className='video-item__title'>{props.sideVideo.title}</h3>
        <p className='video-item__channel'>{props.sideVideo.channel}</p>
      </div>
    </div>
  )
}

export default VideoListItem;