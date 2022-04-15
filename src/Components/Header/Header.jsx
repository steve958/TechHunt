import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  return (
    <div className='header'>
      <Link to='/candidates'>
        <div className='header-logo'></div>
      </Link>
      {localStorage.getItem('token') ? (
        <Link to='/adminpanel'>
          <h2 id='admin-panel-link'>Adminpanel</h2>
        </Link>
      ) : null}
      <div className='login-wrapper'>
        <p className='logged'>
          {localStorage.getItem('token') === 'true'
            ? 'You are logged in as admin'
            : 'Guest'}
        </p>
        <Link to='/login'>
          <button
            className='log-button'
            onClick={() => {
              if (localStorage.getItem('token') === 'true') props.logout();
            }}
          >
            {localStorage.getItem('token') === 'true' ? 'logout' : 'login'}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
