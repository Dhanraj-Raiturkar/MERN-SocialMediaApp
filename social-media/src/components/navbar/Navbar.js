import React from 'react';
import classes from './Navbar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
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
            <li>Homepage</li>
            <li>Timeline</li>
        </ul>
      </div>
      <div className={classes.navbarRight}>
          <div className={classes.iconContainer}>
            <PersonIcon fontSize='large' className={classes.navbarIcons} /><span className={classes.notificationAlert}><span>1</span></span>
            <MessageIcon fontSize='large' className={classes.navbarIcons} /><span className={classes.notificationAlert}><span>7</span></span>
            <NotificationsIcon fontSize='large' className={classes.navbarIcons} /><span className={classes.notificationAlert}><span>2</span></span>
          </div>
          <div className={classes.profileBadge}>
            <img src="./Assets/images/person2.jpg" alt="Profile pic" />
          </div>
      </div>
    </div>
  );
}

export default Navbar