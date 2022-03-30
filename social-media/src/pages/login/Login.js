import { Card, collapseClasses } from '@mui/material';
import React, { useState } from 'react';
import Feed from '../../components/feed/Feed';
import FeedCard from '../../components/feed/FeedCard';
import classes from './Login.module.css';
import Register from '../../components/login/Register';
import LoginForm from '../../components/login/LoginForm';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {

  const toggleLogin = useSelector(state => state.toggleUi.toggleLogin);

  return (
    <div className={classes.container}>
        {!toggleLogin && <Register/>}
        {toggleLogin && <LoginForm/>}
    </div>
  )
}

export default Login;