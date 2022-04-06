import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './UserInfo.module.css';
import EditIcon from '@mui/icons-material/Edit';
import { setUserInfoState,updateUserInfo } from '../../store/slices/loginUserSlice';
import { togglerUserInfoHandler } from '../../store/slices/uiSlices';
import Modal from '../modal/Modal';

const UserInfo = () => {

  // const [editUserInfo, setEditUserInfo] = useState(false);

  const [city, setCity] = useState('');
  const [from, setFrom] = useState('');
  const [relationship, setRelationship] = useState('Single');

  const userInfo = useSelector(state => state.loginUser.userInfo);
  const toggleUserInfoModal = useSelector(state => state.toggleUi.toggleUserInfoModal);
  const dispatch = useDispatch();

  console.log(localStorage.getItem('accesstoken'));

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(city);
    // console.log(from);
    // console.log(relationship);
    dispatch(updateUserInfo(
      {
        city,
        from,
        relationship
      }
    ));
  }

  return (
    <>
      {toggleUserInfoModal && <Modal height='45'>
        <form className={classes.userInfoForm} onSubmit={formSubmitHandler}>
          <h1 style={{color:'rgb(71, 71, 71)', marginBottom:'3vh'}}>About</h1>
          <input onChange={(e) => setCity(e.target.value)} type='text' placeholder='Current City' className={classes.userInfoInput}/>
          <input onChange={(e) => setFrom(e.target.value)} type='text' placeholder='Native' className={classes.userInfoInput}/>
          {/* <label htmlFor='relationship'>Relationship Status</label> */}
          <select id='relationship' className={classes.userInfoInput} onChange={(e) => setRelationship(e.target.options[e.target.selectedIndex].text)}>
            <option value="" disabled selected>Relationship Status</option>
            <option value='Single'>Single</option>
            <option value='In a relationship' >In a relationship</option>
            <option value='Married'>Married</option>
          </select>
          <div className={classes.buttonContainer}>
            <input className={classes.submit} type='submit' value='Save'/>
            <input id={classes.cancelButton} onClick={() => dispatch(togglerUserInfoHandler())} className={classes.submit} type='button' value='Cancel' style={{backgroundColor:'rgb(95, 95, 95)'}} />
          </div>
        </form>
      </Modal>}
      <div className={classes.sideProfileElement}>
          <span className={classes.sideProfiletitle}>User Information
            <div style={{display:'inline'}} onClick={() => dispatch(togglerUserInfoHandler())}><EditIcon sx={{fontSize:20, margin:'0px 1vw', color:'rgb(74, 134, 190)', cursor:'pointer'}}/></div>
          </span>
          <span className={classes.userInfo}><b>City</b>: {userInfo.city}</span>
          <span className={classes.userInfo}><b>From</b>: {userInfo.from}</span>
          <span className={classes.userInfo}><b>Relationship</b>: {userInfo.relationship}</span>
      </div>
    </>
  )
}

export default UserInfo