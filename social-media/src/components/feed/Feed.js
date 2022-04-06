import React, { useEffect } from 'react';
import classes from './Feed.module.css';
import AddPost from './AddPost';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../store/slices/postSlice';
import Modal from '../modal/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { toggleSearchModalHandler } from '../../store/slices/uiSlices';

const Feed = () => {

  const posts = useSelector(state => state.postReducer.posts);
  const toggleSearchModal = useSelector(state => state.toggleUi.toggleSearchModal);
  const searchedUsers = useSelector(state => state.usersReducer.searchedUsers);
  const dispatch = useDispatch();
  console.log(posts);

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
              <button className={classes.followButton}>Follow</button>
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