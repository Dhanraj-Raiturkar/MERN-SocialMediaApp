import React from 'react';
import classes from './Navbar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleLogout } from '../../store/slices/uiSlices';

const Navbar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const profilePageClickHandler = () => {
    navigate('/profile');
  };

  const homePageClickHandler = () => {
    navigate('/');
  };

  const toggleLogoutHandler = () => {
    console.log('clicked');
    dispatch(toggleLogout());
  }

  return (
    <div className={classes.header}>
      <div className={classes.navbarLeft}>
        <span className={classes.title}>Social Media</span>
      </div>
      <div className={classes.navbarCenter}>
        <SearchIcon className={classes.searchLogo}/>
        <form className={classes.search}>
          <input placeholder='search'></input>
        </form>
        <ul className={classes.links}>
            <li onClick={homePageClickHandler}>Homepage</li>
            <li onClick={profilePageClickHandler}>Timeline</li>
        </ul>
      </div>
      <div className={classes.navbarRight}>
          <div className={classes.iconContainer}>
            <PersonIcon fontSize='large' className={classes.navbarIcons} /><span className={classes.notificationAlert}><span>1</span></span>
            <MessageIcon fontSize='large' className={classes.navbarIcons} /><span className={classes.notificationAlert}><span>7</span></span>
            <NotificationsIcon fontSize='large' className={classes.navbarIcons} /><span className={classes.notificationAlert}><span>2</span></span>
          </div>
          <div className={classes.profileBadge}>
            <img src="./Assets/images/profilepic1.png" alt="Profile pic" onClick={toggleLogoutHandler}/>
          </div>
      </div>
    </div>
  );
}

export default Navbar