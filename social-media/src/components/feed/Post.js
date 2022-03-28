import React from 'react';
import classes from './Post.module.css';
import FeedCard from './FeedCard';
import { collapseClasses } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Post = () => {
  return (
    <FeedCard>
        <div className={classes.postHeader}>
            <div className={classes.postDetails}>
                <img alt='Profile pic' src='/Assets/images/person2.jpg' />
                <span className={classes.postUsername}>Jane Doe</span>
                <span className={classes.postTime}>5 mins ago</span>
            </div>
            <div className={classes.postOptions}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div className={classes.postCaption}>
            <span>Dummy caption</span>
        </div>
        <div className={classes.post}>
            <img  alt="post media" src='/Assets/images/postImage.jpg' />
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