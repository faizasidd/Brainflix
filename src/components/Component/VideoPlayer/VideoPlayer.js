import React, { Component } from 'react';
import './VideoPlayer.scss';
import PlayIcon from '../../../assets/images/Icons/play.svg';
import FullscreenIcon from '../../../assets/images/Icons/fullscreen.svg';
import VolumeUp from '../../../assets/images/Icons/volume_up.svg';

// The player controls for the selected video

class VideoPlayer extends Component {

  render() {
    const {
      duration,
      image
    } = this.props.video;

    return (
      <div className='player'>
        <div className='player__controls'>
        <div className='player__control player__control--play'>
          <img
            className='player__control-icon'
            src={PlayIcon}
            alt='The play icon'
          />
        </div>
        <div className='player__control player__control--progress'>
          <progress value='0' max='100'></progress>
          <p className='player__time'>{ `0:00 / ${duration ? duration : '0:00'}`}</p>
        </div>
        <div className='player__control player__control--fsvol'>
          <img
            className='player__control-icon'
            src={FullscreenIcon}
            alt='The fullscreen icon'
          />
          <img
            className='player__control-icon'
            src={VolumeUp}
            alt='The volume control icon'
          />
        </div>
      </div>

      <figure className='player__video'>
          <video poster={image}></video>
        </figure>    
      </div>
    );
}
}

export default VideoPlayer;
