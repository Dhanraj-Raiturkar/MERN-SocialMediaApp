import React from 'react';
import classes from './FeedCard.module.css';

const FeedCard = ({fullWidth, children}) => {

  return (
    <div className={`fullWidth ? ${classes.addpost1} : ${classes.addPost}`}>{children}</div>
  )
}

export default FeedCard