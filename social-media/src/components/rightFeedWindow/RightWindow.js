import React from 'react';
import classes from './RightWindow.module.css';
import EventFeed from './EventFeed';

const RightWindow = () => {
  return (
    <div className={classes.rightSidebarWrapper}>
        <div className={classes.eventFeedContainer}>
            <EventFeed />
        </div>
    </div>
  )
}

export default RightWindow