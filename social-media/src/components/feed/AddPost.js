import React, { useState } from 'react'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import classes from './AddPost.module.css';
import FeedCard from './FeedCard';
import { useSelector } from 'react-redux';


const AddPost = () => {

  const [status, setStatus] = useState('');
  
  const userInfo = useSelector(state => state.loginUser.userInfo);

  const PostChangeHandler = (e) => {
    
  }

  const postSubmitHandler = (e) => {
    e.preventDefault();

  }

  return (
    <FeedCard>
      <form className={classes.addPostForm} method="post" encType="multipart/form-data">
        <div className={classes.caption}  >
          <img alt="Profile pic" src="./Assets/images/profilepic1.png" />
          <input type="text" placeholder={`Whats in your mind ${userInfo.username}?`} onChange={PostChangeHandler}/>
        </div>
        <hr className={classes.addPostDivider}/>
        <div className={classes.media}>
          <div className={classes.addPostUploadOptions}>
            <label for='imageUpload'>
              <PhotoLibraryIcon
                sx={{ fontSize: 40 }}
                style={{ color: "rgb(245, 131, 56)", cursor:'pointer' }}
              />
            </label>
            <span className={classes.uploadIconText}>Photo or Video</span>
            <input type='file' name='imageUpload' id="imageUpload" style={{display:'none'}}/>
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
        </div>
      </form>
      
    </FeedCard>
  );
}

export default AddPost