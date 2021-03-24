import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LoginPage(props) {

  function handleLoginSuccess(username) {
    const { location, history } = props;
    const destination = (location.state || {}).from || '/';
    if (destination === '/') {
      history.push(`/${username}/projects`)
    } else {
      history.push(destination);
    }
  }

  return (
    <section className='login-page'>
      <LoginForm
        onLoginSuccess={handleLoginSuccess}
      />
    </section>
  )
};