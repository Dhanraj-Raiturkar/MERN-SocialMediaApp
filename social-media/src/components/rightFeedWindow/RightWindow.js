import React from 'react';
import classes from './RightWindow.module.css';
import EventFeed from './EventFeed';
import AdFeed from './AdFeed';

const RightWindow = () => {
  return (
    <div className={classes.rightSidebarWrapper}>
        <div className={classes.eventFeedContainer}>
            <EventFeed />
        </div>
        <AdFeed />
    </div>
  )
}

export default RightWindow