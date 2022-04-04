import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserState, deleteUserInfo } from '../../store/slices/loginUserSlice';
import { toggleLogout } from '../../store/slices/uiSlices';
import classes from './MobileLogout.module.css';

const MobileLogout = () => {

    const dispatch = useDispatch();
    const loginStatus = useSelector(state => state.loginUser.loginStatus);
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem('accesstoken');
        localStorage.removeItem('userInfo');
        localStorage.removeItem('userStatus');
        dispatch(setUserState());
        dispatch(deleteUserInfo());
        dispatch(toggleLogout());
        navigate("/login");
    }

    // useEffect(() => {
    //   if (!loginStatus) {
    //   }
    // }, [loginStatus]);

    return (
        <button className={classes.mobileLogout} onClick={logoutHandler}>Logout</button>
    )
}

export default MobileLogout