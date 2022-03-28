import Navbar from '../../components/navbar/Navbar';
import classes from './Home.module.css';
import LeftWindow from '../../components/leftFeedWindow/LeftWindow';
import Feed from '../../components/feed/Feed';
import RightWindow from '../../components/rightFeedWindow/RightWindow';

const Home = () => {
  return (
    <>
        <Navbar/>
        <div className={classes.homeWrapper}>
            <LeftWindow />
            <Feed />
            <RightWindow />
        </div>
    </>
  )
}

export default Home;