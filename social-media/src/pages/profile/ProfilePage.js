import React from 'react';
import LeftWindow from '../../components/leftFeedWindow/LeftWindow';
import Navbar from '../../components/navbar/Navbar';
import Profile from '../../components/profile/Profile';
import classes from './ProfilePage.module.css';

const ProfilePage = () => {
  return (
    <>
        <Navbar/>
        <div className={classes.profilePage}>
            <LeftWindow/>
            <Profile/>
        </div>
    </>
  )
}

export default ProfilePage;