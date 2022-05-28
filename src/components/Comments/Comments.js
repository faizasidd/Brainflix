import React, { Component } from 'react';
import CommentForm from '../CommentForm/CommentForm';
import CommentItem from '../CommentItem/CommentItem';
import './Comments.scss';

// The container wrapping each CommentItem 

class Comments extends Component {

  render() {

    const {comments} = this.props;
    const count = comments.length

  return(
    <div className='comments'>
    <h3 className='comments__count'>{count} Comments</h3>
    <CommentForm />
    {
        comments.map(comment => 
        <CommentItem key={comment.id}
       {...comment}
        />)
    }
    </div>
  )
}
}

export default Comments;

