import React from 'react';
import classes from './Feed.module.css';
import AddPost from './AddPost';
import Post from './Post';

const Feed = () => {
  return (
    <div className={classes.feedContainer}>
        <AddPost/>
        <Post />
        <Post />
    </div>
  )
}

export default Feed