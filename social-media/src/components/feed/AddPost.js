import React, { useState } from 'react'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import classes from './AddPost.module.css';
import FeedCard from './FeedCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../store/slices/postSlice';
import { refreshUsers } from '../../store/slices/userSlice';


const AddPost = () => {

  const dispatch = useDispatch();

  const [status, setStatus] = useState('');
  const [caption, setCaption] = useState('');
  const [postPicture, setPostPicture] = useState('');
  
  const userInfo = useSelector(state => state.loginUser.userInfo);

  const PostChangeHandler = (e) => {
    console.log(e.target.files[0].name);
    setPostPicture(e.target.files[0].name);
    if (e.target.files && e.target.files[0]) {
      setPostPicture(URL.createObjectURL(e.target.files[0]));
    }
  }

  const postSubmitHandler = (e) => {
    setTimeout(() => {
      dispatch(fetchPosts(userInfo._id));
      dispatch(refreshUsers());
      setPostPicture('');
      setCaption('');
    }, 400);
  }

  const inputChangeHandler = (e) => {setCaption(e.target.value)};

  return (
    <FeedCard>
      <iframe name="dummyframe" id="dummyframe" style={{display:'none'}}></iframe>
      <form target='dummyframe' method='POST' action={`http://localhost:5000/api/post/add/${userInfo._id}`} className={classes.addPostForm} encType="multipart/form-data">
        <div className={classes.caption}  >
          {!userInfo.profilePic ? 
            <img className={classes.profilepic} src='/Assets/images/profilepic1.png'/>
          :
            <img className={classes.profilepic} src={`http://localhost:5000/api/images/${userInfo.profilePic}`}/>}
          <input value={caption} name='caption' onChange={inputChangeHandler} type="text" placeholder={`Whats in your mind ${userInfo.username}?`}/>
        </div>
        <hr className={classes.addPostDivider}/>
        {postPicture && <img src={postPicture} className={classes.imagePreview} />}
        <div className={classes.media}>
          <div className={classes.addPostUploadOptions}>
            <label for='postPicture'>
              <PhotoLibraryIcon
                sx={{ fontSize: 40 }}
                style={{ color: "rgb(245, 131, 56)", cursor:'pointer' }}
              />
            </label>
            <input onChange={PostChangeHandler} style={{display:'none'}} type='file' name='postPicture' id='postPicture'/>
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
            <button type='submit' onClick={postSubmitHandler} className={classes.shareButton}>Share</button>
          </div>
        </div>
      </form>
      
    </FeedCard>
  );
}

export default AddPost