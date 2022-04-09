import React, { useEffect, useState } from 'react';
import classes from './Feed.module.css';
import AddPost from './AddPost';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../store/slices/postSlice';
import Modal from '../modal/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { toggleSearchModalHandler } from '../../store/slices/uiSlices';
import { followUser, refreshUsers } from '../../store/slices/userSlice';
import { updateUserInfo } from '../../store/slices/loginUserSlice';

const Feed = () => {

  const [rerun, setRerun] = useState(false);

  console.log('reran');

  const posts = useSelector(state => state.postReducer.posts);
  const toggleSearchModal = useSelector(state => state.toggleUi.toggleSearchModal);
  const userInfo = useSelector(state => state.loginUser.userInfo);
  const searchedUsers = useSelector(state => state.usersReducer.searchedUsers);
  const dispatch = useDispatch();

  const [following, setFollowing] = useState(null);

  console.log(following);

  const setFollowingStatus = () => {
    console.log('you -> ',userInfo);
    try{
      const isFollowing = userInfo.following.includes(searchedUsers._id);
      console.log('you ', isFollowing, ' searchedUser');
      if(isFollowing){
        setFollowing(true);
      }else{
        setFollowing(false);
      }
    }catch(error){
      console.log(error);
    }
  }

  const followClickHandler = () => {
    dispatch(followUser(userInfo._id, searchedUsers._id));
    setTimeout(() => {
      dispatch(toggleSearchModalHandler());
      dispatch(toggleSearchModalHandler());
      setFollowingStatus();
      setRerun(state => !state);
    }, 5000);
  }

  useEffect(() => {
    console.log('useEffect')
    setFollowingStatus();
  }, [toggleSearchModal]); 

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      {toggleSearchModal && <Modal>
        <div style={{display:'flex',flexDirection:'column'}}>
          <div onClick={() => {dispatch(toggleSearchModalHandler())}} style={{marginLeft:'auto'}}><CloseIcon sx={{zIndex:7, marginLeft:'auto', position:'relative', bottom:'1.6em', cursor:'pointer'}}/></div>
          <div className={classes.searchModal}>
            {searchedUsers ? <div className={classes.searchedUserContainer}>
              <div style={{display:'flex',alignItems:'center'}}>
                <img src={`http://localhost:5000/api/images/${searchedUsers.profilePic}`} className={classes.searchedUserImage}/>
                <span style={{marginLeft:'1vw', fontSize:'1.2em'}}>{searchedUsers.username}</span>
              </div>
              {
                !following ? 
                  <button className={classes.followButton} onClick={followClickHandler}>Follow</button>
                :
                  <button className={classes.followButton} onClick={followClickHandler}>Unfollow</button>
              }
            </div> : 
            <span>No users found</span>
            }
          </div>
        </div>
      </Modal>}
      <div className={classes.postFeedWrapper}>
        <div className={classes.feedContainer}>
          <AddPost/>
          {posts && posts.slice(0).reverse().map((post, index) => {
            return <Post key={index} userId={post.userId} image={post.image} likes={post.likes} caption={post.caption} />
          })}
        </div>
      </div>
    </>
  )
}

export default Feed