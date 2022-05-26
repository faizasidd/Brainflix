// import React, { Component } from 'react';
// import axios from 'axios';
// import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
// import VideoInfo from '../components/VideoInfo/VideoInfo';
// import VideoList from '../components/VideoList/VideoList';
// import Comments from '../components/Comments/Comments';
// import './HomePage.scss';

// class HomePage extends Component {

//     constructor() {
//         super();
      
//         this.state = {videoPlayer: MainVideo[0],
//         sideVideo:NextVideo};
      
//       }
      
//       clickHandler = (id) => {
//         let newVideo = MainVideo.findIndex(main => main.id === id)
//         this.setState({videoPlayer:{...MainVideo[newVideo]}})
//       }

// render() {
// return (
//     <>
// <VideoPlayer videoPlayer = {this.state.videoPlayer} />
//       <div className='App__container'>
//         <div className='App__left'>
//           <VideoInfo videoPlayer = {this.state.videoPlayer}/>
//            <Comments videoPlayer = {this.state.videoPlayer} /> 
//            </div>
//        <VideoList sideVideo = {this.state.sideVideo} clickHandler={this.clickHandler} id = {this.state.videoPlayer.id} />
//       </div>
//     </>
// );
    
// }
// }

// export default HomePage;