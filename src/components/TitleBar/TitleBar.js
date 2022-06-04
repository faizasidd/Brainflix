import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo/BrainFlix-logo.svg';
import SearchIcon from '../../assets/images/Icons/search.svg';
import UploadIcon from '../../assets/images/Icons/upload.svg';
import './TitleBar.scss';

// The title bar at the top of the page

class TitleBar extends Component {

  render() {
    return (
      <div className='title-bar'>

        {/* The Brainflix logo that links to the vidoes page */}
        <Link to='/videos'>
          <div className='title-bar__logo-container'>
            <img
              className='title-bar__logo'
              src={Logo}
              alt='The Brainflix Logo'
            />
          </div>
        </Link>

        {/* The search bar container for the input and icon */}
        <div className='title-bar__search-container'>
          <img
            className='title-bar__icon'
            src={SearchIcon}
            alt='The search icon'
          />
          <input
            className='text-input text-input--search'
            type='text'
            placeholder='Search'
          />
        </div>

        {/* The upload button that redirects to the upload page */}
        <Link to='/upload' className='btn btn--upload'>
          <img src={UploadIcon} alt='The upload icon'/>
          upload
        </Link>

        <img
          className='title-bar__img'
          src={this.props.image}
          alt={'The user\'s profile'}
        />
      </div>
    );
  }
}

export default TitleBar;