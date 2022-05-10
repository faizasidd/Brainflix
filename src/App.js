import React from 'react';
import TitleBar from './components/TitleBar/TitleBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Mohan from './assets/images/Mohan-muruge.jpg';
import './App.scss';
import MainVideo from './data/video-details.json';
import SideVideo from './data/videos.json';

class App extends React.Component {
/*console.log(MainVideo)
console.log(SideVideo)*/

constructor() {
  super();

  this.state = {videoPlayer: MainVideo };
}
  render() {
  return (
    <>
   <div className="App">
      <TitleBar image={Mohan} /> 
      <VideoPlayer videoPlayer = {this.state.videoPlayer[0]} />
  </div>
  </>
  );
}
}

export default App;
