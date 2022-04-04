import React from 'react';
import classes from './FriendList.module.css';

const FriendList = () => {
  return (
    <ul className={classes.friendlist}>
            <li className={classes.friendListItem}>
                <img src='./Assets/images/profilepic1.png'/>
                <span>Jane Doe</span>
            </li>
            <li className={classes.friendListItem}>
                <img src='./Assets/images/profilepic1.png'/>
                <span>Jane Doe</span>
            </li>
            <li className={classes.friendListItem}>
                <img src='./Assets/images/profilepic1.png'/>
                <span>Jane Doe</span>
            </li>
            <li className={classes.friendListItem}>
                <img src='./Assets/images/profilepic1.png'/>
                <span>Jane Doe</span>
            </li>
            <li className={classes.friendListItem}>
                <img src='./Assets/images/profilepic1.png'/>
                <span>Jane Doe</span>
            </li>
            <li className={classes.friendListItem}>
                <img src='./Assets/images/profilepic1.png'/>
                <span>Jane Doe</span>
            </li>
            <li className={classes.friendListItem}>
                <img src='./Assets/images/profilepic1.png'/>
                <span>Jane Doe</span>
            </li>
        </ul>
  )
}

export default FriendList