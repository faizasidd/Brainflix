import React, { Component } from 'react';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import TitleBar from './components/TitleBar/TitleBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoInfo from './components/VideoInfo/VideoInfo';
import VideoList from './components/VideoList/VideoList';
import Comments from './components/Comments/Comments';
import Mohan from './assets/images/Mohan-muruge.jpg';
import './App.scss';
import MainVideo from './data/video-details.json';
import NextVideo from './data/videos.json';

import UploadPage from './pages/Page/UploadPage';
import HomePage from './pages/Page/HomePage';

class App extends Component {

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
  return (
    <>
   <div className="App">
   <BrowserRouter>
      <TitleBar image={Mohan} /> 
      <Switch>
        <Route path='/upload' component={UploadPage} />
      <VideoPlayer videoPlayer = {this.state.videoPlayer} />
      <div className='App__container'>
        <div className='App__left'>
          <VideoInfo videoPlayer = {this.state.videoPlayer}/>
           <Comments videoPlayer = {this.state.videoPlayer} /> 
           </div>
       <VideoList sideVideo = {this.state.sideVideo} clickHandler={this.clickHandler} id = {this.state.videoPlayer.id} />
      </div>
      </Switch>
      </BrowserRouter>
  </div>
  </>
  );
}
}

export default App;
