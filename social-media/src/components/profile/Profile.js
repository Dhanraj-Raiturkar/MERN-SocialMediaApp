import React from 'react';
import AddPost from '../feed/AddPost';
import Post from '../feed/Post';
import FriendsSideComponent from './FriendsSideComponent';
import classes from './Profile.module.css';
import ProfilePicFrame from './ProfilePicFrame';
import UserInfo from './UserInfo';

const Profile = () => {
  return (
    <div className={classes.profile}>
        <ProfilePicFrame/>
        <div className={classes.profileFeed}>
            <div className={classes.mainProfileFeed}>
                <AddPost fullWidth='true'/>
                <Post />
            </div>
            <div className={classes.sideProfileFeed}>
                <UserInfo/>
                <FriendsSideComponent/>
            </div>
        </div>
    </div>
  )
}

export default Profile;