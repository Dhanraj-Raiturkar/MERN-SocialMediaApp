import React from 'react';
import classes from './ProfilePicFrame.module.css';

const ProfilePicFrame = () => {
  return (
    <div className={classes.picFrame}>
        <img className={classes.coverpic} src='/Assets/images/coverpic.jpg' />
        <img className={classes.profilepic} src='/Assets/images/person2.jpg' ></img>
        <span>Jane Doe</span>
    </div>
  )
}

export default ProfilePicFrame