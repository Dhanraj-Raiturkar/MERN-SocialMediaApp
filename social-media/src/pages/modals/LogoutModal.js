import React, { useEffect } from 'react';
import MobileLogout from '../../components/leftFeedWindow/MobileLogout';
import classes from './LogoutModal.module.css';
import CloseIcon from '@mui/icons-material/Close';
import { toggleLogout } from '../../store/slices/uiSlices';
import { useDispatch, useSelector } from 'react-redux';
import { setUserState, deleteUserInfo } from '../../store/slices/loginUserSlice';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/modal/Modal';

const LogoutModal = (props) => {

  const dispatch = useDispatch();
  const loginStatus = useSelector(state => state.loginUser.loginStatus);
  const navigate = useNavigate();

  const toggleLogoutHandler = () => {
    dispatch(toggleLogout());
  }

  const logoutHandler = () => {
    console.log('clicked');
    localStorage.removeItem('accesstoken');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('userStatus');
    dispatch(setUserState());
    dispatch(deleteUserInfo());
    dispatch(toggleLogout());
    navigate("/login");
  }

  // useEffect(() => {
  //     if (!loginStatus) {
        
  //     }
  // }, [loginStatus]);

  return (
    <Modal>
        <div className={classes.modalContent}>
            <div style={{display:'flex',justifyContent:'flex-end'}} onClick={toggleLogoutHandler}><CloseIcon sx={{fontSize:32, color:'grey', cursor:'pointer'}}/></div>
            <span style={{textAlign:'center',fontSize:'1.2em'}}>Are you sure?</span>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center', height:'80%'}}><button className={classes.button} onClick={logoutHandler}>Logout</button></div>
        </div>
    </Modal>
  )
}

export default LogoutModal