import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './ProfilePicFrame.module.css';
import { toggleCoverPicHandler } from '../../store/slices/uiSlices';

const ProfilePicFrame = () => {

  const userInfo = useSelector(state => state.loginUser.userInfo);

  const coverPicChangeHandler = (e) => {
    document.getElementById('changeCoverProfile').addEventListener('submit', (e) => {
      e.preventDefault();
    })
    document.getElementById('changeCoverProfile').submit();
  }

  return (
    <>
      <form id='changeCoverProfile' action={`http://localhost:5000/api/users/coverpic/${userInfo._id}`} className={classes.picFrame} method="POST" encType="multipart/form-data">
        <label className={classes.coverPicLabel} for='coverPicUpload'>
          <img className={classes.coverpic} src='/Assets/images/coverPicDefault.png'/>
        </label>
        <input type='file' name='coverPicUpload' id="coverPicUpload" style={{display:'none'}} onChange={coverPicChangeHandler}/>
        <img className={classes.profilepic} src='/Assets/images/profilepic1.png' ></img>
        <span>Dhanraj Pai</span>
      </form>
    </>
  )
}

export default ProfilePicFrame