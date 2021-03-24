import React from 'react'
import { Link } from 'react-router-dom'
import './Action.css'

export default function Action(props) {
  return (
    <div className='Action'>
      <h2 className='Action__mealName'>
        <Link to={`/comment/${props.id}`}>
          {props.mealName}
        </Link>
      </h2>
     <hr></hr>
      <div className='Action__dates'>
        <div className='Action__dates-date'>
          Dates : {props.date}
         </div> 
     </div>
     {props.description}
        {' '}
        <hr></hr>
        {props.result}
        {' '} 
    </div> 
  )
}
