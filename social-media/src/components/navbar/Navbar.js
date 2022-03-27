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
            <PersonIcon className={classes.navbarIcons} />
            <MessageIcon className={classes.navbarIcons} />
            <NotificationsIcon className={classes.navbarIcons} />
          </div>
          <div className={classes.profileBadge}>
            <img></img>
          </div>
      </div>
    </div>
  );
}

export default Navbar