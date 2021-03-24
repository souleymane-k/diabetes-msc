import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Action from '../Action/Action'
import CircleButton from '../CircleButton/CircleButton'
import './CommentList.css'

export default function CommentList(props) {
  return (
    <section className='CommentList'>
      <ul>
        {props.comments.map(comment =>
          <li key={comment.id}>
            <Action
              id={comment.id}
              mealName={comment.mealName}
              date={comment.date}
              result={comment.result}
              description={comment.description}
            /> 
          </li>
        )}
      </ul>
      <div className='ComentList__button-container'>
        <CircleButton
          tag={Link}
          to='/add-comment'
          type='button'
          className='CommentList__add-comment-button'
        >
          <FontAwesomeIcon icon='plus' />
          <br />
          RESULT
        </CircleButton>
      </div>
    </section>
  )
}

CommentList.defaultProps = {
  comments: [],
}
