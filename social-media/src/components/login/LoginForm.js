import React, { useEffect, useState } from 'react';
import classes from './LoginForm.module.css';

const LoginForm = () => {

  // const [loginForm, setLoginForm] = useState(true);

  // const clickHandler = () => {
  //   setLoginForm((prev) => !prev);
  // }

  // render(loginForm);
  

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
        <button className={classes.registerButton}>Create new account</button>
    </div>
  )
}

export default LoginForm;