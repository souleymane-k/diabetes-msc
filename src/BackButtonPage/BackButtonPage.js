import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import './BackButtonPage.css'

export default function BackButtonPage(props) {
  return (
    <div className='BackButtonPage'>
      <CircleButton
        tag='button'
        role='link'
        onClick={() => props.history.goBack()}
        className='BackButtonPage__back-button'
      >
        {/* <FontAwesomeIcon icon='chevron-left' /> */}
        <FontAwesomeIcon icon='arrow-left' />
        <br />
         Go Back
      </CircleButton>
      {props.month && (
        <h3 className='BackButton__month-name'>
          {props.month.name}
        </h3>
      )}
    </div>
  )
}

BackButtonPage.defaultProps = {
  history: {
    goBack: () => {}
  }
}
