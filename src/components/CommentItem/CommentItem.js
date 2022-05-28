import React, { Component } from 'react';
import './CommentItem.scss';
import date from '../Helper/Helper';

// A component for every comment on the page

class CommentItem extends Component {

  render() {
    const {
      src,
      timestamp,
      name,
      comment
    } = this.props;

    return (
      <div className='comment'>
       
            <div className='comment__img'></div>
        
        <h3 className='comment__name'>{name}</h3>
        <h3 className='comment__timestamp'>{date(timestamp)}</h3>
        <p className='comment__text'>{comment}</p>
      </div>
    )
  }
}

export default CommentItem;