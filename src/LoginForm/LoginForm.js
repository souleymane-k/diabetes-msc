import React from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';

import AuthContext from '../../contexts/AuthContext';
import './LoginForm.scss';

export default class LoginForm extends React.Component {
  static contextType = AuthContext;

  static defaultProps = {
    onLoginSuccess: () => {},
  };

  state = { error: null };

  handleSubmitJwtAuth = e => {
    e.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = e.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = '';
        password.value = '';

        TokenService.saveAuthToken(res.authToken);
        const base64Url = res.authToken.split('.')[1];
        const decodedValue = JSON.parse(window.atob(base64Url));
        this.context.setUserName(decodedValue.sub);
        this.context.setUserId(decodedValue.user_id);
        this.context.setUser(decodedValue.sub, decodedValue.user_id);
        this.props.onLoginSuccess(decodedValue.sub);
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="login-form" onSubmit={this.handleSubmitJwtAuth}>
        <fieldset>
          <h2>Login</h2>
          <label
            className="login-form__user-name-label"
            htmlFor="login-form__user-name"
          >
            username
          </label>
          <input
            type="text"
            name="user_name"
            id="login-form__user-name"
            placeholder="username"
            required
          />
          <label
            className="login-form__password-label"
            htmlFor="login-form__password"
          >
            password
          </label>
          <input
            type="password"
            name="password"
            id="login-form__password"
            placeholder="password"
            required
          />

          <div role="alert">
            {error && <p className="error-msg">{error}</p>}
          </div>
          <input type="submit" value="submit" />
          <div className="warning-msg">
            <p>Demo account credentials:</p>
            <p>
              username: <em>user</em>
            </p>
            <p>
              password: <em>Password1!</em>
            </p>
          </div>
        </fieldset>
      </form>
    );
  }
}
