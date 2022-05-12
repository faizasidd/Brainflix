import React from 'react';
import './CommentItem.scss';

const CommentItem = (props) => {
  
    return (
      <div className='comment'>
        {
          props.src
            ? <img className='comment__img' src={props.src} alt={'The user\'s profile'}/> 
            : <div className='comment__img'></div>
        }
        <h3 className='comment__name'>{props.name}</h3>
        <h3 className='comment__timestamp'>{props.timestamp}</h3>
        <p className='comment__text'>{props.comment}</p>
      </div>
    )
  }
  
  export default CommentItem;