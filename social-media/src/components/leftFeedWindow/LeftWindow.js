import React from 'react';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import classes from './LeftWindow.module.css';
import { requirePropFactory } from '@mui/material';

const LeftWindow = () => {
  return (
    <div className={classes.leftSidebarWrapper}>
        <ul className={classes.leftsidebarOptions}>
            <li><RssFeedIcon sx={{fontSize:40}} /><span>Feed</span></li>
            <li><ChatIcon sx={{fontSize:40}} /><span>Chat</span></li>
            <li><VideoLibraryIcon sx={{fontSize:40}} /><span>Video</span></li>
            <li><GroupsIcon sx={{fontSize:40}} /><span>Groups</span></li>
            <li><WorkIcon sx={{fontSize:40}} /><span>Jobs</span></li>
            <li><EventIcon sx={{fontSize:40}} /><span>Events</span></li>
            <li><SchoolIcon sx={{fontSize:40}} /><span>Courses</span></li>
            <li><BookmarkIcon sx={{fontSize:40}} /><span>Courses</span></li>
            <li><HelpIcon sx={{fontSize:40}} /><span>Courses</span></li>
        </ul>
        {/* <input type="submit" value="Show More"/> */}
        <hr className={classes.leftSidebarHr}/>
        <ul className={classes.friendlist}>
            <li className={classes.friendListItem}>
                <img src='./Assets/images/person2.jpg'/>
                <span>Jane Doe</span>
            </li>
            <li className={classes.friendListItem}>
                <img src='./Assets/images/person2.jpg'/>
                <span>Jane Doe</span>
            </li>
            <li className={classes.friendListItem}>
                <img src='./Assets/images/person2.jpg'/>
                <span>Jane Doe</span>
            </li>
            <li className={classes.friendListItem}>
                <img src='./Assets/images/person2.jpg'/>
                <span>Jane Doe</span>
            </li>
            <li className={classes.friendListItem}>
                <img src='./Assets/images/person2.jpg'/>
                <span>Jane Doe</span>
            </li>
            <li className={classes.friendListItem}>
                <img src='./Assets/images/person2.jpg'/>
                <span>Jane Doe</span>
            </li>
            <li className={classes.friendListItem}>
                <img src='./Assets/images/person2.jpg'/>
                <span>Jane Doe</span>
            </li>
        </ul>
    </div>
  )
}

export default LeftWindow