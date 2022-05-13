import React from 'react';
import './VideoListItem.scss';

// A component for a suggested video item

const VideoListItem = (props) => {
  
  const newMainVideo = {
    id: props.id,
    title: props.title, 
    channel: props.channel,
    image: props.image,
    views: props.views,
    likes: props.likes,
    duration: props.duration,
    timestamp: props.timestamp,
    description: props.description,
    name: props.name,
    comment: props.comment  
}

  return (
    <div className='video-item' onClick={()=>props.clickHandler({newMainVideo})}> 
      <img
        className='video-item__img'
        id ={props.id}
        src={props.image}
        alt='The video image' />
      <div className='video-item__right'>
        <h3 className='video-item__title'>{props.title}</h3>
        <p className='video-item__channel'>{props.channel}</p>
      </div>
    </div>
  )
}

export default VideoListItem;
