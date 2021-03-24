import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Header.scss';

import AuthContext from '../../contexts/AuthContext';

export default class Header extends React.Component {
  static contextType = AuthContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.setUserName(null);
    this.context.setUserId(null);
  }

  renderLogoutLink() {
    return (
      <div className='site-nav__dir--logged-in'>
        <Link
          to={`/${this.context.user_name}/projects`}
          >
          Projects
          </Link>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
          </Link>
      </div>
    );
  };

  renderLoginLink() {
    return (
      <div className='site-nav__dir'>
        <Link
          to='/register'>
          Register
        </Link>
        <Link
          to='/login'>
          Login
        </Link>
      </div>
    );
  };

  render() {
    return (
      <nav className='site-nav'>
        <h1>
          <Link to='/'>
            ToneLab
          </Link>
        </h1>
        <Link to='/editor'>
          New Project
        </Link>
        {
          TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()
        }
      </nav>
    );
  };
};