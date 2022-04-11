import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './ProfilePicFrame.module.css';
import { updateUserCoverpic } from '../../store/slices/loginUserSlice';
import { refreshUsers } from '../../store/slices/userSlice';

const ProfilePicFrame = () => {

  const userInfo = useSelector(state => state.loginUser.userInfo);
  const dispatch = useDispatch();

  const coverPicChangeHandler = (e) => {
    document.getElementById('changeCoverProfile').submit();
    setTimeout(() => {
      dispatch(updateUserCoverpic());
    }, 3000);
  }

  const profilePicChangeHandler = (e) => {
    document.getElementById('changeProfileProfile').submit();
    setTimeout(() => {
      dispatch(updateUserCoverpic());
    }, 3000);
  }

  return (
    <div className={classes.picFrame}>
      <iframe name="dummyframe" id="dummyframe" style={{display:'none'}}></iframe>
      <form target="dummyframe" id='changeCoverProfile' action={`http://localhost:5000/api/users/coverpic/${userInfo._id}`} className={classes.coverPicForm} method="POST" encType="multipart/form-data">
        <label className={classes.coverPicLabel} for='coverPicUpload'>
          {userInfo.coverPic ? 
            <img className={classes.coverpic} src={`http://localhost:5000/api/images/${userInfo.coverPic}`}/>
          :
            <img className={classes.coverpic} src={'Assets/images/coverPicDefault.png'}/>
          }
        </label>
        <input value="" type='file' name='coverPicUpload' id="coverPicUpload" style={{display:'none'}} onChange={coverPicChangeHandler}/>
      </form>
      <iframe name="dummy" id="dummy" style={{display:'none'}}></iframe>
      <form target="dummy" id='changeProfileProfile' action={`http://localhost:5000/api/users/profilepic/${userInfo._id}`} className={classes.profilePicFrame} method="POST" encType="multipart/form-data">
        <label className={classes.coverPicLabel} for='profilePicUpload'>
          {!userInfo.profilePic ? 
            <img className={classes.profilepic} src='/Assets/images/profilepic1.png'/>
          :
            <img className={classes.profilepic} src={`http://localhost:5000/api/images/${userInfo.profilePic}`} />}
        </label>
        <input value="" type='file' name='profilePicUpload' id="profilePicUpload" style={{display:'none'}} onChange={profilePicChangeHandler}/>
      </form>
      <span>{userInfo.username}</span>
    </div>
  )
}

export default ProfilePicFrame