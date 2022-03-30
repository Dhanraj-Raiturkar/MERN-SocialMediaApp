import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './LoginForm.module.css';
import { toggleLogin } from '../../store/slices/uiSlices';

const LoginForm = () => {
  
  const dispatch = useDispatch();

  const registerClickHandler = () => {
    console.log('clicked');
    dispatch(toggleLogin());
  };

  return (
    <div className={classes.card}>
        <div className={classes.header}>
              <h1>Social Media</h1>
        </div>
        <form className={classes.registerForm}>
            <input placeholder='Email' />
            <input placeholder='Password' />
            <input id={classes.submit} type='submit' value='Login' />
        </form>
        <hr />
        <span style={{marginTop:'2vh', textAlign:'center'}}>Dont have an account?</span>
        <button className={classes.registerButton} onClick={registerClickHandler}>Create new account</button>
    </div>
  )
}

export default LoginForm;