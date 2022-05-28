import React, { Component } from 'react';
import axios from 'axios';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import VideoList from '../../components/VideoList/VideoList';
import Comments from '../../components/Comments/Comments';
import './HomePage.scss';
// import MainVideo from '../data/video-details.json';
// import NextVideo from '../data/videos.json';

const API_KEY = '189efc79-8553-4491-a110-7623ce65d4f6';
const API_URL = 'https://project-2-api.herokuapp.com';

class HomePage extends Component {

    state = {
        videos: [],
        selected: {},
        comments: []
      }
    
      fetchSelectedVideo = () => {
        const id  = this.props.match.params.id || this.state.selected.id;
    
        axios.get(`${API_URL}/videos/${id}/?api_key=${API_KEY}`)
        .then(response => {
          this.setState(prevState => ({
            ...prevState,
            selected: response.data,
            comments: response.data.comments
          }))
        })
        .catch(err => {
          console.log(err);
        });
      }
    
      componentDidMount() {
        axios.get(`${API_URL}/videos?api_key=${API_KEY}`)
        .then(response => {
          // If we have an id from url, use it. Otherwise, default to first in response array
          const id  = this.props.match.params.id || response.data[0].id;
    
          // Chaining these two requests together prevents one extra render by setting state once
          axios.get(`${API_URL}/videos/${id}/?api_key=${API_KEY}`)
          .then(response2 => {
            this.setState({
              videos: response.data,
              selected: response2.data,
              comments: response2.data.comments
            })
          })
        })
        .catch(err => {
          console.log(err);
        })
      }
    
      componentDidUpdate(_prevProps, prevState) {
        if (prevState.selected.id !== this.props.match.params.id) {
          this.fetchSelectedVideo();
        }
      }
    
      render() {
        const {
          videos,
          selected,
          comments,
        } = this.state;
    
        return (
          <>
            <VideoPlayer video={selected}/>
            <div className='home__container'>
              <div className='home__left'>
                <VideoInfo video={selected}/>
                <Comments
                  comments={comments.sort((a,b) => b.timestamp - a.timestamp)}
                  handleSubmit={this.handleSubmit}
                />
              </div>
              <VideoList videos={videos.filter(video => video.id !== selected.id)}/>
            </div>
          </>
        )
      }
    } 

export default HomePage;

// this.state = {videoPlayer: MainVideo[0],
//     sideVideo:NextVideo};
  
//   }
  
//   clickHandler = (id) => {
//     let newVideo = MainVideo.findIndex(main => main.id === id)
//     this.setState({videoPlayer:{...MainVideo[newVideo]}})
//   }

// render() {
// return (
// <>
// <VideoPlayer videoPlayer = {this.state.videoPlayer} />
//   <div className='home__container'>
//     <div className='home__left'>
//       <VideoInfo videoPlayer = {this.state.videoPlayer}/>
//        <Comments videoPlayer = {this.state.videoPlayer} /> 
//        </div>
//    <VideoList sideVideo = {this.state.sideVideo} clickHandler={this.clickHandler} id = {this.state.videoPlayer.id} />
//   </div>
// </>
// );

// }
// }