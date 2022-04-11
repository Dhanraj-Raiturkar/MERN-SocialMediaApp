import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './FriendList.module.css';
import List from './List';

const FriendList = () => {
  
  const following = useSelector(state => state.loginUser.userInfo.following);
  console.log(following);

  const [followingUsers, setFollowingUsers] = useState([]);

  useEffect(() => {
    try{
        following.map(async(uid) => {
            const response = await fetch(`http://localhost:5000/api/users/${uid}`, {method:'GET'});
            if(response.ok){
                const data = await response.json();
                setFollowingUsers((prev) => {
                    return prev = prev.concat(data);
                })
            }
        });
    }catch(error){
        console.log(error);
    }
  }, []);

  console.log(followingUsers);

  return (
    <ul className={classes.friendlist}>
        {followingUsers.map((user) => {
            return <List user={user} />
        })}
            {/* <li className={classes.friendListItem}>
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
            </li> */}
        </ul>
  )
}

export default FriendList