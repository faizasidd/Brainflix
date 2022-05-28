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
        <Route exact path={['/videos', '/']} component={HomePage} />
        <Route path='/upload' component={UploadPage} />
        <Route path='/videos/:id' component={HomePage} />
      </Switch>
      </BrowserRouter>
  </div>
  </>
  );
}
}

export default App;
