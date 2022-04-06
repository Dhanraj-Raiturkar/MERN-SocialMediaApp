import React from 'react';
import { useSelector } from 'react-redux';
import AddPost from '../feed/AddPost';
import Post from '../feed/Post';
import FriendsSideComponent from './FriendsSideComponent';
import classes from './Profile.module.css';
import ProfilePicFrame from './ProfilePicFrame';
import UserInfo from './UserInfo';


const Profile = () => {
  const posts = useSelector(state => state.postReducer.posts);
  return (
    <div className={classes.profile}>
        <ProfilePicFrame/>
        <div className={classes.profileFeed}>
            <div className={classes.mainProfileFeed}>
                <AddPost fullWidth='true'/>
                {posts && posts.map((post, index) => {
                  return <Post key={index} userId={post.userId} image={post.image} likes={post.likes} caption={post.caption} />
                })}
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