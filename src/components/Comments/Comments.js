import React from 'react';
import './Comments.scss';
import CommmentForm from '../CommentForm';
import CommentItem from './CommentItem';

// The container wrapping each CommentItem 

const Comments = (props) => {
    const currentcomments = props.videoPlayer.comments
  return(
    <div className='comments'>
    {/* <h3 className='comments__count'>{props.videoPlayer.comments} </h3> */}

    props.map()
    </div>
  )
}

export default Comments;

