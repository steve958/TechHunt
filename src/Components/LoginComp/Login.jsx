import React from 'react';
import './Login.scss';
import { useState, useContext } from 'react';
import { ctx } from '../ProviderComp/ProviderComp';
import { Link } from 'react-router-dom';

export const LoginComp = () => {
  const [data, submitCred] = useState();
  const value = useContext(ctx);
  const [userpass, getUserpass] = useState();
  const [useremail, getUseremail] = useState();

  const submitCredentials = () => {
    fetch('http://localhost:3333/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: `${useremail}`,
        password: `${userpass}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {

        data.accessToken ? value.changeTokenStatus(true) 
          : value.changeTokenStatus(false);
          
          localStorage.setItem('token', true);
          
          
          value.getTokenData(data.accessToken)
        localStorage.setItem("tokenData",data.accessToken)
      });
  };

  return (
    <div className='login-comp'>
      <p className='login-admin'>Login as Admin</p>
      <h2 className='admin-info'>Enter as admin and manage data and reports</h2>
      <div className='input'>
        <h3>Email:</h3>
        <input
          type='text'
          onChange={(e) => {
            getUseremail(e.target.value);
          }}
        />
        <h3>Password :</h3>
        <input
          type='password'
          onChange={(e) => {
            getUserpass(e.target.value);
          }}
        />
        <Link to='/adminpanel'>
          <button id='sign-in' onClick={submitCredentials}>
            sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginComp;
