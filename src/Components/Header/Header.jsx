import React from 'react';
import './Header.scss';

export const Header = () => {
  return (
    <div className="header">
      <div className="header-logo"></div>
      <div></div>
      <p className="logged">You are logged in as admin</p>
    </div>
  );
};

export default Header;
