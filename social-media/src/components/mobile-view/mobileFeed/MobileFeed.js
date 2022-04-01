import React from 'react';
import classes from './MobileFeed.module.css';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Post from '../../feed/Post';

const MobileFeed = () => {
  return (
    <>
      <div className={classes.uploadPost}>
        <div className={classes.menuLinks}>
          <img src="Assets/images/profilepic1.png" />
        </div>
        <div className={classes.iconContainer}>
          <input placeholder="Whats in your mind?" />
        </div>
        <div className={classes.menuLinks}>
          <AddAPhotoIcon fontSize="large" />
        </div>
      </div>
      <Post />
      <Post />
    </>
  );
}

export default MobileFeed;