import React from 'react';
import './VideoInfo.scss';
import LikesIcon from '../../assets/images/Icons/likes.svg';
import ViewsIcon from '../../assets/images/Icons/views.svg';

// The info component displaying title, description, likes, etc for the selected video

const VideoInfo = (props) => {
  
    return (
      <div className='video-info'>
  
        <h1 className='video-info__title'>{props.videoPlayer.title}</h1>
  
        <div className='video-info__second-row'>
          <h3 className='video-info__channel'>{`By ${props.videoPlayer.channel}`}</h3>
          <p className='video-info__timestamp'>{props.videoPlayer.timestamp}</p>
        </div>
  
        <div className='video-info__third-row'>
          <img className='video-info__icon' src={ViewsIcon} alt='The views icon' />
          <p className='video-info__count'>{props.videoPlayer.views}</p>
          <img className='video-info__icon' src={LikesIcon} alt='The likes icon' />
          <p className='video-info__count'>{props.videoPlayer.likes}</p>
        </div>
  
        <p className='video-info__desc'>{props.videoPlayer.description}</p>
      </div>
    )
  }
  
  export default VideoInfo;