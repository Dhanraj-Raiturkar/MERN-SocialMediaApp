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

const Feed = () => {

  const posts = useSelector(state => state.postReducer.posts);
  const toggleSearchModal = useSelector(state => state.toggleUi.toggleSearchModal);
  const userInfo = useSelector(state => state.loginUser.userInfo);
  const searchedUsers = useSelector(state => state.usersReducer.searchedUsers);
  const dispatch = useDispatch();

  const [following, setFollowing] = useState(false);


  const followClickHandler = () => {
    dispatch(followUser(userInfo._id, searchedUsers._id));
    setTimeout(() => {
      dispatch(refreshUsers(userInfo.username));
    },3000);
  }

  useEffect(() => {
    const following = userInfo.following.filter(user => user === searchedUsers._id);
    if(following[0]){
      setFollowing(true);
    }else{
      setFollowing(false);
    }
  }, [userInfo]); 

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
                following ? 
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