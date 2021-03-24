import React from 'react';

import './HomePage.scss';
import pianorollimg from '../../img/piano-roll-sample2.jpg';
import pianorollimgmobile from '../../img/piano-roll-sample-mobile.jpg';

export default function HomePage() {
  return (
    <section className='home-page'>
      <h2>Diabetes-MS</h2>
      <h3>Compose short musical sequences</h3>
      <p>Get started by clicking 'new project'</p>
      <p>Log in with a demo account to access stored projects and save new ones</p>
      <img
        src={pianorollimg}
        srcSet={`${pianorollimgmobile} 620w, ${pianorollimg} 768w`}
        alt='piano roll'
      />
    </section>
  )
};