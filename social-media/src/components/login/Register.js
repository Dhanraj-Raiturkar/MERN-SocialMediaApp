import React, { useState } from 'react';
import classes from './Register.module.css';

const Register = () => {

    // const [toggleForm, setToggleForm] = useState(false);

    // const clickHandler = () => {
    //     setToggleForm((prev) => !prev);
    // }

    // render(toggleForm);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState(null);
    const [gender, setGender] = useState('');

    const usernameChangeHandler = (e) => {setUsername(e.target.value)};
    const emailChangeHandler = (e) => {setEmail(e.target.value)};
    const passwordChangeHandler = (e) => {setPassword(e.target.value)};
    const dobChangeHandler = (e) => {setDob(e.target.value)};
    const genderChangeHandler = (e) => {setGender(e.target.value)};

    const [usernameTouched, setUsernameTouched] = useState();
    const [emailTouched, setEmailTouched] = useState();
    const [passwordTouched, setPasswordTouched] = useState();
    const [dobTouched, setDobTouched] = useState();

    const usernameBlurHandler = () => {setUsernameTouched(true)};
    const emailBlueHandler = () => {setEmailTouched(true)};
    const passwordBlurHandler = () => {setPasswordTouched(true)};
    const dobBlurHandler = () => {setDobTouched(true)};  

  return (
    <div className={classes.card}>
            <div className={classes.header}>
              <h1>Sign Up</h1>
              <span>Its quick and easy!</span>
            </div>
            <form className={classes.registerForm}>
              <input placeholder='Username' onChange={usernameChangeHandler}/>
              <input placeholder='Email' onChange={emailChangeHandler}/>
              <input placeholder='Password' onChange={passwordChangeHandler}/>
              <input type='date' onChange={dobChangeHandler}/>
              <div className={classes.radioButtons}>
                  <input defaultChecked type='radio' value='Male' name='gender' onChange={genderChangeHandler}/>
                  <label>Male</label>
                  <input type='radio' value='Female' name='gender' onChange={genderChangeHandler}/>
                  <label>Female</label>
                  <input type='radio' value='Custom' name='gender' onChange={genderChangeHandler}/>
                  <label>Custom</label>
              </div>
              <input id={classes.submit} type='submit' value='Create account' />
              <span style={{textAlign:'center', cursor:'pointer'}}>Already have an account? login.</span>
            </form>
        </div>
  )
}

export default Register