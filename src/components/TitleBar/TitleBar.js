import React from 'react';


import Logo from '../../assets/images/logo/BrainFlix-logo.svg';
import SearchIcon from '../../assets/images/Icons/search.svg';
import UploadIcon from '../../assets/images/Icons/upload.svg';
import './TitleBar.scss';

// The title bar at the top of the page

const TitleBar = (props) => {
  return (
    <div className='title-bar'>

      <img
        className='title-bar__logo'
        src={Logo}
        alt='The Brainflix Logo'
      />

      <div className='title-bar__search-container'>
        <img
          className='title-bar__icon'
          src={SearchIcon}
          alt='The search icon'
        />
        <input
          className='title-bar__search'
          type='text'
          placeholder='Search'
        />
      </div>

      <button className='btn btn--upload'>
        <img src={UploadIcon} alt='The upload icon'/>
        upload
      </button>

      <img
        className='title-bar__img'
        src={props.image}
        alt={'The user\'s profile'}
      />

    </div>
  );
}

export default TitleBar;