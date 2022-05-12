import React from 'react';
import './CommentForm.scss';
import Mohan from '../../assets/images/Mohan-muruge.jpg'
import CommentIcon from '../../assets/images/Icons/add_comment.svg';

// The form for submitting comments

const CommentForm = (props) => {
  return (
    <form className='com-form' onSubmit={event => props.handleSubmit(event)}>
      <label className='com-form__label'>Join the conversation</label>
      <img
        className='com-form__img'
        src={Mohan}
        alt={'The user\'s profile'}
      />
      <textarea
        className='com-form__comment'
        name='comment'
        placeholder='Add a new comment'
        required
      ></textarea>
      <button className='btn btn--comment'>
        <img src={CommentIcon} alt='The add comment icon'/>
        comment
      </button>
    </form>
  );
}

export default CommentForm;