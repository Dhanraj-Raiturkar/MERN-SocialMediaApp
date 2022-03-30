import React, { useEffect, useState } from 'react';
import classes from './Register.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { checkUsernameAvailability, checkEmailAvailability, registerUser } from '../../store/slices/registerUserSlice';
import { toggleLogin } from '../../store/slices/uiSlices';

const Register = () => {

  
    const loginClickHandler = () => {
      dispatch(toggleLogin());
    }

    const [currentDate, setCurrentDate] = useState(new Date);

    const usernameState = useSelector(state => state.registerUser.usernameIsAvailable);
    const emailState = useSelector(state => state.registerUser.emailIsAvailable);
    const dispatch = useDispatch();
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState(null);
    const [gender, setGender] = useState('Male');
    
    const usernameChangeHandler = (e) => {setUsername(e.target.value)};
    const emailChangeHandler = (e) => {setEmail(e.target.value)};
    const passwordChangeHandler = (e) => {setPassword(e.target.value)};
    const dobChangeHandler = (e) => {setDob(e.target.value)};
    const genderChangeHandler = (e) => {
      console.log(e.target.value);
      setGender(e.target.value)
    };
    
    const [usernameTouched, setUsernameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [dobTouched, setDobTouched] = useState(false);
    
    const usernameBlurHandler = () => {
      console.log('blur');
      setUsernameTouched(true);
      dispatch(checkUsernameAvailability(username));
    };
    const emailBlurHandler = () => {
      setEmailTouched(true);
      dispatch(checkEmailAvailability(email));
    };
    const passwordBlurHandler = () => {setPasswordTouched(true)};
    const dobBlurHandler = () => {setDobTouched(true)}; 
    
    const usernameInValid = (username.length === 0) && usernameTouched;
    const emailInValid = ((email.trim() === '') || !(email.includes('@') && email.includes('.com'))) && emailTouched;
    const passwordIsValid = (/\d/.test(password) && /[a-zA-Z]/g.test(password) && /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)); 
    const dobIsValid = (currentDate.getFullYear() - new Date(dob).getFullYear()) >= 10;

    const formIsValid = !usernameInValid && usernameState && !emailInValid && emailState && passwordIsValid && passwordTouched && dobIsValid;

    const formSubmitHandler = (e) => {
      e.preventDefault();
      const newUser = { 
        username,
        email, 
        password, 
        birthday:dob, 
        gender 
      }
      console.log(newUser);
      dispatch(registerUser(newUser));
    }

    return (
    <div className={classes.card}>
            <div className={classes.header}>
              <h1>Sign Up</h1>
              <span>Its quick and easy!</span>
            </div>
            <form className={classes.registerForm} onSubmit={formSubmitHandler}>
              <input className={usernameInValid || !usernameState ? classes.error : ''} placeholder='Username' onChange={usernameChangeHandler} onBlur={usernameBlurHandler}/>
              {usernameInValid && <span className={classes.errorMsg}>please enter a username</span>}
              {!usernameState && <span className={classes.errorMsg}>this username is taken</span>}
              <input className={emailInValid || !emailState ? classes.error : ''} placeholder='Email' onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
              {emailInValid && <span className={classes.errorMsg}>please enter a valid email</span>}
              {!emailState && <span className={classes.errorMsg}>this email is taken</span>}
              <input className={passwordTouched && !passwordIsValid ? classes.error : ''} placeholder='Password' type='password' onChange={passwordChangeHandler} onBlur={passwordBlurHandler}/>
              {passwordTouched && !passwordIsValid && <span className={classes.errorMsg}>include letter, number and special character</span>} 
              <input className={!dobIsValid ? classes.error : ''} type='date' onChange={dobChangeHandler} onBlur={dobBlurHandler}/>
              {!dobIsValid && <span className={classes.errorMsg}>age needs to be 10+</span>}
              <div className={classes.radioButtons}>
                  <input defaultChecked type='radio' value='Male' name='gender' onClick={genderChangeHandler}/>
                  <label>Male</label>
                  <input type='radio' value='Female' name='gender' onClick={genderChangeHandler}/>
                  <label>Female</label>
                  <input type='radio' value='Custom' name='gender' onClick={genderChangeHandler}/>
                  <label>Custom</label>
              </div>
              <input id={formIsValid ? classes.submit : classes.unsubmit} type='submit' value='Create account' />
              <span style={{textAlign:'center', cursor:'pointer', fontSize:'0.8em'}} onClick={loginClickHandler}>Already have an account? login.</span>
            </form>
        </div>
  )
}

export default Register