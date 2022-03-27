import Navbar from '../../components/navbar/Navbar';
import classes from './Home.module.css';
import LeftWindow from '../../components/leftFeedWindow/LeftWindow';

const Home = () => {
  return (
    <>
        <Navbar/>
        <div className={classes.homeWrapper}>
            <LeftWindow />
            <div className={classes.postFeedWrapper}>
                Feed window
            </div>
            <div className={classes.rightSidebarWrapper}>
                Right window
            </div>
        </div>
    </>
  )
}

export default Home;