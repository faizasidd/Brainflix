import React, { Component } from 'react';
import './VideoInfo.scss';
import LikesIcon from '../../assets/images/Icons/likes.svg';
import ViewsIcon from '../../assets/images/Icons/views.svg';
import date from '../Helper/Helper';

// The info component displaying title, description, likes, etc for the selected video

class VideoInfo extends Component {
  render() {
    const {
      title,
      channel,
      timestamp,
      views,
      likes,
      description
    } = this.props.video;

    return (
      <div className='video-info'>
  
        <h1 className='video-info__title'>{title}</h1>
  
        <div className='video-info__second-row'>
          <h3 className='video-info__channel'>{`By ${channel}`}</h3>
          <p className='video-info__timestamp'>{date(timestamp)}</p>
        </div>
  
        <div className='video-info__third-row'>
          <img className='video-info__icon' src={ViewsIcon} alt='The views icon' />
          <p className='video-info__count'>{views}</p>
          <img className='video-info__icon' src={LikesIcon} alt='The likes icon' />
          <p className='video-info__count'>{likes}</p>
        </div>
  
        <p className='video-info__desc'>{description}</p>
      </div>
    )
  }
}
  
export default VideoInfo;