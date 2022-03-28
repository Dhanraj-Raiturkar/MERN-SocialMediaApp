import React from 'react';
import classes from './FeedCard.module.css';

const FeedCard = (props) => {
  return (
    <div className={classes.addPost}>{props.children}</div>
  )
}

export default FeedCard