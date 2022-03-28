import React from 'react';
import classes from './HamburgerMenu.module.css';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FeedIcon from '@mui/icons-material/Feed';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Post from '../../feed/Post';

const HamburgerMenu = () => {
  return (
    <div className={classes.hamburgerMenu}> 
        <div className={classes.mobileNav}>
            <div className={classes.menuLinks}>
                <FeedIcon fontSize='large' />
            </div>
            <div className={classes.iconContainer}>
                <PersonIcon fontSize='large' className={classes.navbarIcons} /><span className={classes.notificationAlert}><span>1</span></span>
                <MessageIcon fontSize='large' className={classes.navbarIcons} /><span className={classes.notificationAlert}><span>7</span></span>
                <NotificationsIcon fontSize='large' className={classes.navbarIcons} /><span className={classes.notificationAlert}><span>2</span></span>
            </div>
            <div className={classes.menuLinks}>
                <AccountBoxIcon fontSize='large'/>
            </div>
        </div>
        <div className={classes.uploadPost}>
            <div className={classes.menuLinks}>
                <img src='Assets/images/person2.jpg' />
            </div>
            <div className={classes.iconContainer}>
                <input placeholder='Whats in your mind?'/>
            </div>
            <div className={classes.menuLinks}>
                <AddAPhotoIcon fontSize='large'/>
            </div>
        </div>
        <Post />
        <Post />
    </div>
  )
}

export default HamburgerMenu