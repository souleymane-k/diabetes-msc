import React from 'react'
import Action from '../Action/Action'
import './GeneralCommentPage.css'

export default function GeneralCommentPage(props) {
  return (
    <section className='GeneralCommentPage'>
      <Action
        id={props.comment.id}
        name={props.comment.mealName}
        date={props.comment.date}
        result ={props.comment.result}
        description={props.comment.description}
      />
      <div className='GeneralCommentPage__desription'>
        {props.comment.description.split(/\n \r|\n/).map((para, i) =>
          <p key={i}>{para}</p>
        )}
      </div>
    </section>
  )
}

GeneralCommentPage.defaultProps = {
  comment: {
    description: '',
    date: ''
  }
}