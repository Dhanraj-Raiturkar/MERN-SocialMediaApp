import React, { useEffect } from 'react';
import classes from './Post.module.css';
import FeedCard from './FeedCard';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../store/slices/loginUserSlice';

const Post = (props) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(props.userId));
  }, [])

  const userInfo = useSelector(state => state.loginUser.postUser);

  return (
    <FeedCard>
        <div className={classes.postHeader}>
            <div className={classes.postDetails}>
                {userInfo && <img alt='Profile pic' src={`http://localhost:5000/api/images/${userInfo.profilePic}`} />}
                {userInfo && <span className={classes.postUsername}>{userInfo.username}</span>}
                <span className={classes.postTime}>5 mins ago</span>
            </div>
            <div className={classes.postOptions}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div className={classes.postCaption}>
            <span>{props.caption}</span>
        </div>
        <div className={classes.post}>
            {userInfo && <img  alt="post media" src={`http://localhost:5000/api/images/${props.image}`} />}
        </div>
        <div className={classes.postFooter}>
            <div className={classes.likeSection}>
                <div style={{backgroundColor:'rgb(20, 80, 177)'}}><ThumbUpIcon sx={{fontSize:20, color:'white'}} /></div>
                <div style={{backgroundColor:'rgb(248, 100, 113)'}}><FavoriteIcon sx={{fontSize:20, color:'white'}} /></div>
                <span>26 Likes</span>
            </div>
            <div className={classes.commentSection}>
                <span>3 comments</span>
            </div>
        </div>
    </FeedCard>
  )
}

export default Post