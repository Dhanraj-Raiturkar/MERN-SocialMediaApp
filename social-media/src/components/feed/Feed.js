import React from 'react';
import classes from './Feed.module.css';
import AddPost from './AddPost';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';

const Feed = () => {

  const posts = useSelector(state => state.postReducer.posts);
  console.log(posts);

  return (
    <div className={classes.postFeedWrapper}>
      <div className={classes.feedContainer}>
        <AddPost/>
        {posts && posts.map((post, index) => {
          return <Post key={index} userId={post.userId} image={post.image} likes={post.likes} caption={post.caption} />
        })}
      </div>
    </div>
  )
}

export default Feed