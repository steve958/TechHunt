import React from 'react';
import './LoginPage.scss';
import LoginComp from '../../Components/LoginComp/Login';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  

  return (
    <div className='login-page-containter'>
      <h1 className='welcome'>Welcome to TechHunt</h1>
      <div className='login-page-wrapper'>
        <div>
          <LoginComp></LoginComp>
        </div>
        <div>
          <img className='logo' />
        </div>
        <div>
          <div className='guest-login'>
            <h2>Continue as Guest</h2>
            <p>Enter the application and access the reports listed inside</p>
            <Link to="/candidates">
              <button className='continue'>continue</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
