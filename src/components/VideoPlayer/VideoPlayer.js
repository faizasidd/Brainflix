import React from 'react';
import './VideoPlayer.scss';
import PlayIcon from '../../assets/images/Icons/play.svg';
import FullscreenIcon from '../../assets/images/Icons/fullscreen.svg';
import VolumeUp from '../../assets/images/Icons/volume_up.svg';


const VideoPlayer = (props) => {
  
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
          <p className='player__time'>{ `0:00 / ${props.videoPlayer.duration}` }</p>
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

      <video
        className='player__video'
        poster={props.videoPlayer.image}
       /*src = {('https://project-2-api.herokuapp.com/stream')}*/
     />       
      </div>
    );
}

export default VideoPlayer;
