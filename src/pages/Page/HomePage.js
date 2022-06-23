import React, { Component } from 'react';
import axios from 'axios';
import VideoPlayer from '../../components/Component/VideoPlayer/VideoPlayer';
import VideoInfo from '../../components/Component/VideoInfo/VideoInfo';
import VideoList from '../../components/Component/VideoList/VideoList';
import Comments from '../../components/Component/Comments/Comments';
import './HomePage.scss';

class HomePage extends Component {

  state = {
    videos: [],
    selected: {},
    comments: []
  }

  fetchSelectedVideo = () => {
    const id = this.props.match.params.id || this.state.videos[0].id;

    axios.get(`/videos/${id}`)
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
    axios.get(`/videos`)
    .then(response => {
      // If we have an id from url, use it. Otherwise, default to first in response array
      const id  = this.props.match.params.id || response.data[0].id;

      // Chaining these two requests together prevents one extra render by setting state once
      axios.get(`/videos/${id}`)
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

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;

    if ((id && prevState.selected.id !== id)
      || prevProps.match.params.id !== id) {
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
        <VideoPlayer video={selected} {...this.props} />
        <div className='home__container'>
          <div className='home__left'>
            <VideoInfo video={selected} />
            <Comments
              comments={comments.sort((a, b) => b.timestamp - a.timestamp)}
            />
          </div>
          <VideoList videos={videos.filter(video => video.id !== selected.id)} />
        </div>
      </>
    )
  }
}

export default HomePage;