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
import classes from './Menu.module.css';

const Menu = () => {
  return (
    <ul className={classes.leftsidebarOptions}>
      <li>
        <RssFeedIcon sx={{ fontSize: 35 }} />
        <span>Feed</span>
      </li>
      <li>
        <ChatIcon sx={{ fontSize: 35 }} />
        <span>Chat</span>
      </li>
      <li>
        <VideoLibraryIcon sx={{ fontSize: 35 }} />
        <span>Video</span>
      </li>
      <li>
        <GroupsIcon sx={{ fontSize: 35 }} />
        <span>Groups</span>
      </li>
      <li>
        <WorkIcon sx={{ fontSize: 35 }} />
        <span>Jobs</span>
      </li>
      <li>
        <EventIcon sx={{ fontSize: 35 }} />
        <span>Events</span>
      </li>
      <li>
        <SchoolIcon sx={{ fontSize: 35 }} />
        <span>Courses</span>
      </li>
      <li>
        <BookmarkIcon sx={{ fontSize: 35 }} />
        <span>Courses</span>
      </li>
      <li>
        <HelpIcon sx={{ fontSize: 35 }} />
        <span>Courses</span>
      </li>
    </ul>
  );
}

export default Menu