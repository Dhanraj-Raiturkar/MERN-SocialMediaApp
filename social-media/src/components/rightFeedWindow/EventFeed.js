import React from 'react';
import classes from './EventFeed.module.css';

const EventFeed = () => {
  return (
    <div className={classes.eventFeed}>
        <img src='/Assets/icons/birthday.png'></img>
        <span className={classes.eventText}><b>John Doe</b> and <b>4 others</b> have birthdays today!</span>
    </div>
  )
}

export default EventFeed