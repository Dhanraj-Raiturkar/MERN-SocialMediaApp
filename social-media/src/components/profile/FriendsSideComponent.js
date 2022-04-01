import React from 'react';
import classes from './FriendsSideComponent.module.css';

const FriendsSideComponent = () => {
  return (
    <div className={classes.friends}>
        <span className={classes.sideProfiletitle}>User friends</span>
        <div className={classes.friendListFrame}>
            <div className={classes.friendDiv}>
                <img src='Assets/images/person5.webp'/>
                <span><b>John Doe</b></span>
            </div>
            <div className={classes.friendDiv}>
                <img src='Assets/images/person5.webp'/>
                <span><b>John Doe</b></span>
            </div>
            <div className={classes.friendDiv}>
                <img src='Assets/images/person5.webp'/>
                <span><b>John Doe</b></span>
            </div>
        </div>
        <div className={classes.friendListFrame}>
            <div className={classes.friendDiv}>
                <img src='Assets/images/person5.webp'/>
                <span><b>John Doe</b></span>
            </div>
            <div className={classes.friendDiv}>
                <img src='Assets/images/person5.webp'/>
                <span><b>John Doe</b></span>
            </div>
            <div className={classes.friendDiv}>
                <img src='Assets/images/person5.webp'/>
                <span><b>John Doe</b></span>
            </div>
        </div>
    </div>
  )
}

export default FriendsSideComponent