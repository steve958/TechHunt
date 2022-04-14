import React from 'react';
import './Header.scss';
import { ctx } from '../ProviderComp/ProviderComp';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  const value = useContext(ctx);

  return (
    <div className="header">
      <Link to="/candidates">
        <div className="header-logo"></div>
      </Link>
      <div className="login-wrapper">
        <p className="logged">
          {localStorage.getItem('token') === 'true'
            ? 'You are logged in as admin'
            : 'Guest'}
        </p>
        <Link to="/login">
          <button
            className="log-button"
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
