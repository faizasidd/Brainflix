import React from 'react';
import TitleBar from './components/TitleBar/TitleBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoInfo from './components/VideoInfo/VideoInfo';
import VideoList from './components/VideoList/VideoList';
import Comments from './components/Comments/Comments';
import Mohan from './assets/images/Mohan-muruge.jpg';
import './App.scss';
import MainVideo from './data/video-details.json';
import NextVideo from './data/videos.json';

// const API_KEY = 'e7877112-7863-4b0d-93aa-5fb567cfa0f4';
// const API_URL = 'https://project-2-api.herokuapp.com';

class App extends React.Component {

constructor() {
  super();

  this.state = {videoPlayer: MainVideo[0],
  sideVideo:NextVideo};

}

clickHandler = (id) => {
  let newVideo = MainVideo.findIndex(main => main.id === id)
  this.setState({videoPlayer:{...MainVideo[newVideo]}})
}
  
render() {
console.log(this.state.videoPlayer)
  return (
    <>
   <div className="App">
      <TitleBar image={Mohan} /> 
      <VideoPlayer videoPlayer = {this.state.videoPlayer} />
      <div className='App__container'>
        <div className='App__left'>
          <VideoInfo videoPlayer = {this.state.videoPlayer}/>
           <Comments videoPlayer = {this.state.videoPlayer} /> 
           </div>
       <VideoList sideVideo = {this.state.sideVideo} clickHandler={this.clickHandler} id = {this.state.videoPlayer.id} />
      </div>
  </div>
  </>
  );
}
}

export default App;
