import React from 'react'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import classes from './AddPost.module.css';
import FeedCard from './FeedCard';

const PostChangeHandler = () => {

}

const AddPost = () => {
  return (
    <FeedCard>
      <form className={classes.addPostForm}>
        <img alt="Profile pic" src="./Assets/images/person2.jpg" />
        <input type="text" placeholder="Whats in your mind Jane?" onChange={PostChangeHandler}/>
      </form>
      <hr className={classes.addPostDivider}/>
      <div className={classes.addPostUploadOptions}>
        <PhotoLibraryIcon
          sx={{ fontSize: 40 }}
          style={{ color: "rgb(245, 131, 56)" }}
        />
        <span className={classes.uploadIconText}>Photo or Video</span>
        <LocalOfferIcon
          sx={{ fontSize: 40 }}
          style={{ color: "rgb(0, 65, 245)" }}
        />
        <span className={classes.uploadIconText}>Tag</span>
        <AddLocationAltIcon
          sx={{ fontSize: 40 }}
          style={{ color: "rgb(30, 197, 0)" }}
        />
        <span className={classes.uploadIconText}>Location</span>
        <EmojiEmotionsIcon
          sx={{ fontSize: 40 }}
          style={{ color: "rgb(231, 235, 8" }}
        />
        <span className={classes.uploadIconText}>Feelings</span>
        <button className={classes.shareButton}>Share</button>
      </div>
    </FeedCard>
  );
}

export default AddPost