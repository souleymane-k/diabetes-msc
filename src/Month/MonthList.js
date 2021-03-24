import React from 'react'
import { NavLink, Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import { countCommentsForMonth } from '../MonthCommentHelper'
import './MonthList.css'

export default function MonthLIst(props) {
  return (
    <div className='MonthList'>
      <ul className='MonthList__list'>
        {props.months.map(month =>
          <li key={month.id}>
            <NavLink
              className='MonthList__month-link'
              to={`/month/${month.id}`}
            >
              <span className='MonthList__num-comments'>
                {countCommentsForMonth(props.comments, month.id)}
              </span>
              {month.name}
            </NavLink>
          </li>
        )}
      </ul>
      <div className='MonthList__button-wrapper'>
        <CircleButton
          tag={Link}
          to='/add-month'
          type='button'
          className='MonthList__add-month-button'
        >
          {/* <FontAwesomeIcon icon='plus' /> */}
          <br />
          ADD MONTH
        </CircleButton>
      </div>
    </div>
  )
}

MonthLIst.defaultProps = {
  month: []
}
