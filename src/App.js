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

class App extends React.Component {

constructor() {
  super();

  this.state = {videoPlayer: MainVideo[0],
  sideVideo:NextVideo};

 // const date = time => {
  // const newDate = new Date(time);
  // const month = newDate.getMonth() + 1;
  // const day = newDate.getDate();
  // const year = newDate.getFullYear();
  // const date = {'${month} / ${day} / ${year}'}
//   return date;
// };


}
// clickHandler = (selectedvideo) => {
//   console.log(selectedvideo)
//   // let newVideoList = NextVideo.filter(video => video.id !== id);
//   // // newVideoList.push(this.state.Maideo);

//   // this.setState({
//   //     sideVideo: newVideoList, 
//   //      videoPlayer: {id: id, channel: channel, title: id.title, image: id.image, description: id.description},
//   //  });

clickHandler = (e) => {
  let newVideoList = this.state.sideVideo.filter(video => video.id !== e.id);
  //newVideoList.push(this.state.videoPlayer);

  this.setState({
      sideVideo: newVideoList, 
       videoPlayer: {id: e.id, channel: e.channel, title: e.title, image: e.image, description: e.description, likes: e.likes, views: e.views, duration: e.duration, timestamp: e.timestamp},
   });
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
           <Comments videoPlayer = {this.state.videoPlayer} /> 
           </div>
       <VideoList sideVideo = {this.state.sideVideo} clickHandler={this.clickHandler} />
      </div>
  </div>
  </>
  );
}
}

export default App;
