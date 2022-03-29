import { Card, collapseClasses } from '@mui/material';
import React, { useState } from 'react';
import Feed from '../../components/feed/Feed';
import FeedCard from '../../components/feed/FeedCard';
import classes from './Login.module.css';
import Register from '../../components/login/Register';
import LoginForm from '../../components/login/LoginForm';

const Login = () => {

  // const [toggleForms, setToggleForms] = useState(false);

  // const renderForm = (state) => {
  //   setToggleForms(() => state);
  // }

  return (
    <div className={classes.container}>
        {/* {!toggleForms && <Register render={renderForm}/>}
        {toggleForms && <LoginForm render={renderForm}/>} */}
        <Register />
    </div>
  )
}

export default Login;