import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './VideoListItem.scss';

// A component for a suggested video item

class VideoListItem extends Component {

  render() {
    const {
      id,
      image,
      title,
      channel
    } = this.props;

  return (
    <Link to={`/videos/${id}`} className='video-item'>
      <img
        className='video-item__img'
        src={image ?
          (image.startsWith('https://')
            ? image
            : require('../../../assets/images/Upload-video-preview.jpg'))
          : ''}
        alt='The video image' />
      <div className='video-item__right'>
        <h3 className='video-item__title'>{title}</h3>
        <p className='video-item__channel'>{channel}</p>
      </div>
    </Link>
  )
}
}

export default VideoListItem;
