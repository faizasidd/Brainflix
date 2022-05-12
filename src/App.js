import React from 'react';
import TitleBar from './components/TitleBar/TitleBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoInfo from './components/VideoInfo/VideoInfo';
import Comments from './components/Comments/Comments';
import Mohan from './assets/images/Mohan-muruge.jpg';
import './App.scss';
import MainVideo from './data/video-details.json';
import SideVideo from './data/videos.json';

class App extends React.Component {

constructor() {
  super();

  this.state = {videoPlayer: MainVideo[0],title: MainVideo,channel:MainVideo,description:MainVideo,views:MainVideo,likes:MainVideo,timestamp:MainVideo,comments:MainVideo,name:MainVideo,timestamp:MainVideo,comment:MainVideo};

  // const newDate = new Date.timestamp;
  // const month = newDate.getMonth() + 1;
  // const day = newDate.getDate();
  // const year = newDate.getFullYear();
  // const date = {'${month} / ${day} / ${year}'};

}
  render() {
  return (
    <>
   <div className="App">
      <TitleBar image={Mohan} /> 
      <VideoPlayer videoPlayer = {this.state.videoPlayer} />
      <div className='App__container'>
        <div className='App__left'>
          <VideoInfo videoPlayer = {this.state.videoPlayer}/>
           <Comments videoPlayer={this.state.videoPlayer} /> 
           </div>
   
      </div>
  </div>
  </>
  );
}
}

export default App;
