import React, { useState } from 'react';
import classes from './Navbar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLogout, toggleSearchModalHandler } from '../../store/slices/uiSlices';
import { fetchSearchedUsers, refreshUsers } from '../../store/slices/userSlice';
import { fetchPosts } from '../../store/slices/postSlice';

const Navbar = () => {

  const userInfo = useSelector(state => state.loginUser.userInfo);

  const [search, setSearch] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchSearchedUsers(search));
    dispatch(refreshUsers(userInfo.username));
    setTimeout(() => {
      dispatch(toggleSearchModalHandler());
    }, 3000);
  };

  const inputChangeHandler = (e) => {setSearch(e.target.value)};

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const profilePageClickHandler = () => {
    dispatch(fetchPosts(userInfo._id));
    navigate('/profile');
  };

  const homePageClickHandler = () => {
    navigate('/');
  };

  const toggleLogoutHandler = () => {
    dispatch(toggleLogout());
  }

  return (
    <div className={classes.header}>
      <div className={classes.navbarLeft}>
        <span className={classes.title}>Social Media</span>
      </div>
      <div className={classes.navbarCenter}>
        <SearchIcon className={classes.searchLogo}/>
        <form className={classes.search} onSubmit={submitHandler}>
          <input placeholder='search' onChange={inputChangeHandler}></input>
        </form>
        <ul className={classes.links}>
            <li onClick={homePageClickHandler}>Homepage</li>
            <li onClick={profilePageClickHandler}>Timeline</li>
        </ul>
      </div>
      <div className={classes.navbarRight}>
          <div className={classes.iconContainer}>
            <PersonIcon fontSize='large' className={classes.navbarIcons} /><span className={classes.notificationAlert}><span>1</span></span>
            <MessageIcon fontSize='large' className={classes.navbarIcons} /><span className={classes.notificationAlert}><span>7</span></span>
            <NotificationsIcon fontSize='large' className={classes.navbarIcons} /><span className={classes.notificationAlert}><span>2</span></span>
          </div>
          <div className={classes.profileBadge}>
            {!userInfo.profilePic ? 
              <img className={classes.profilepic} src='/Assets/images/profilepic1.png' alt="Profile pic" onClick={toggleLogoutHandler}/>
            :
              <img className={classes.profilepic} src={`http://localhost:5000/api/images/${userInfo.profilePic}`} alt="Profile pic" onClick={toggleLogoutHandler}/>}
          </div>
      </div>
    </div>
  );
}

export default Navbar