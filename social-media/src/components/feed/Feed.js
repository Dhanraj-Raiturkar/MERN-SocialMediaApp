import React from 'react';
import classes from './Feed.module.css';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Feed = () => {
  return (
    <div className={classes.feedContainer}>
        <div className={classes.addPost}>
            <form className={classes.addPostForm}>
                <img alt='Profile pic' src='./Assets/images/person2.jpg' />
                <input type='text' placeholder='Whats in your mind Jane?' />
            </form>
            <hr/>
            <div>
                <PhotoLibraryIcon className={classes.uploadIcons} sx={{fontSize:50}} style={{color:'rgb(245, 131, 56)'}} /><span className={classes.uploadIconText}>Photo or Video</span>
                <LocalOfferIcon sx={{fontSize:50}} style={{color:'rgb(0, 65, 245)'}}/><span className={classes.uploadIconText}>Tag</span>
                <AddLocationAltIcon sx={{fontSize:50}} style={{color:'rgb(30, 197, 0)'}}/><span className={classes.uploadIconText}>Location</span>
                <EmojiEmotionsIcon sx={{fontSize:50}} style={{color:'rgb(231, 235, 8'}}/><span className={classes.uploadIconText}>Feelings</span>
            </div>
        </div>
    </div>
  )
}

export default Feed