import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './LoginForm.module.css';
import { toggleLogin } from '../../store/slices/uiSlices';
import { loginUser, setLoginFailed, setUserInfoState } from '../../store/slices/loginUserSlice';
import { useNavigate } from 'react-router';

const LoginForm = () => {
  
  const dispatch = useDispatch();
  const loginStatus = useSelector(state => state.loginUser.loginStatus);
  const loginFailed = useSelector(state => state.loginUser.loginFailed);
  if(loginStatus){
    localStorage.setItem('userStatus', JSON.stringify({loginStatus,loginFailed}));
  }
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);

  const passwordIsValid = (password.length >= 3);

  const registerClickHandler = () => {dispatch(toggleLogin());};

  const emailChangeHandler = (e) => {setEmail(e.target.value);};
  const passwordChangeHandler = (e) => {setPassword(e.target.value);setPasswordTouched(true)};
  // const passwordBlurHandler = (e) => {setPasswordTouched(true)};

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser({email,password}));
    if(loginFailed){
      setTimeout(() => {
        loginFailed = !loginFailed;
      },3000);
    }
  };

  useEffect(() => {
    if(loginStatus){
      navigate('/');
    }
  }, [loginStatus]);

  return (
    <div className={classes.card}>
        <div className={classes.header}>
              <h1>Social Media</h1>
        </div>
        <form className={classes.registerForm} onSubmit={submitHandler}>
            <input placeholder='Email' type='email' onChange={emailChangeHandler}/>
            <input className={!passwordIsValid && passwordTouched ? classes.error : ''} placeholder='Password' type="password" onChange={passwordChangeHandler}/>
            <input 
              className={classes.loginBtn}
              id={passwordIsValid && passwordTouched && email.length > 3 
                  ? classes.submit : classes.unsubmit} 
              type='submit' value='Login' />
            {loginFailed && <div className={classes.loginFailed}>
                <span>Incorrect Username or Password</span>
                <span>Login Failed</span>
            </div>}
        </form>
        <hr />
        <span style={{marginTop:'2vh', textAlign:'center'}}>Dont have an account?</span>
        <button className={classes.registerButton} onClick={registerClickHandler}>Create new account</button>
    </div>
  )
}

export default LoginForm;