import React from 'react';
import FriendList from './FriendList';
import classes from './LeftWindow.module.css';
import Menu from './Menu';
import MobileLogout from './MobileLogout';

const LeftWindow = () => {
  return (
    <div className={classes.leftSidebarWrapper}>
        <Menu/>
        {/* <input type="submit" value="Show More"/> */}
        <hr className={classes.leftSidebarHr}/>
        <FriendList/>
        <MobileLogout/>
    </div>
  )
}

export default LeftWindow