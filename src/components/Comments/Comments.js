import React from 'react';
import CommentForm from '../CommentForm/CommentForm';
import CommentItem from '../CommentItem/CommentItem';
import './Comments.scss';

// The container wrapping each CommentItem 

const Comments = (props) => {
    const comments = props.videoPlayer.comments
    const count = comments.length

  return(
    <div className='comments'>
    <h3 className='comments__count'>{count} Comments</h3>
    <CommentForm />
    {
        props.videoPlayer.comments.map(comment => 
        <CommentItem key={comment.id}
        id = {comment.id}
        name = {comment.name}
        timestamp = {comment.timestamp}
        comment = {comment.comment}
        />)
    }
    </div>
  )
}

export default Comments;

