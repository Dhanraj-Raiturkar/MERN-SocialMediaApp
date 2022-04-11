import React from 'react';
import classes from './List.module.css';

const List = (props) => {
    console.log(props.user)
  return (
    <li className={classes.friendListItem}>
        <img src={`http://localhost:5000/api/images/${props.user.profilePic}`} />
        <span>{props.user.username}</span>
    </li>
  )
}

export default List