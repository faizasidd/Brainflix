import React from 'react';
import './CommentItem.scss';
import date from '../Helper/Helper';

const CommentItem = (props) => {

    return (
      <div className='comment'>
       
            <div className='comment__img'></div>
        
        <h3 className='comment__name'>{props.name}</h3>
        <h3 className='comment__timestamp'>{date(props.timestamp)}</h3>
        <p className='comment__text'>{props.comment}</p>
      </div>
    )
  }
  
  export default CommentItem;