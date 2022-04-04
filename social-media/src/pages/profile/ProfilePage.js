import React from 'react';
import { useSelector } from 'react-redux';
import LeftWindow from '../../components/leftFeedWindow/LeftWindow';
import Navbar from '../../components/navbar/Navbar';
import Profile from '../../components/profile/Profile';
import LogoutModal from '../modals/LogoutModal';
import classes from './ProfilePage.module.css';

const ProfilePage = () => {

  const toggleLogout = useSelector(state => state.toggleUi.toggleLogout);

  console.log(toggleLogout);


  return (
    <>
        <Navbar/>
        {toggleLogout && <LogoutModal/>}
        <div className={classes.profilePage}>
            <LeftWindow/>
            <Profile/>
        </div>
    </>
  )
}

export default ProfilePage;