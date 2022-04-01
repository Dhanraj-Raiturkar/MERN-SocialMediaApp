import React from 'react';
import classes from './UserInfo.module.css';

const UserInfo = () => {
  return (
    <div className={classes.sideProfileElement}>
        <span className={classes.sideProfiletitle}>User Information</span>
        <span className={classes.userInfo}><b>City</b>: Bangalore</span>
        <span className={classes.userInfo}><b>From</b>: Goa</span>
        <span className={classes.userInfo}><b>Relationship</b>: Single</span>
    </div>
  )
}

export default UserInfo