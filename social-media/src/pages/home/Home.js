import Navbar from '../../components/navbar/Navbar';
import classes from './Home.module.css';
import LeftWindow from '../../components/leftFeedWindow/LeftWindow';
import Feed from '../../components/feed/Feed';
import RightWindow from '../../components/rightFeedWindow/RightWindow';
import HamburgerMenu from '../../components/mobile-view/hamburger/HamburgerMenu';

const Home = () => {
  return (
    <>
        <Navbar/>
        <HamburgerMenu />
        <div className={classes.homeWrapper}>
            <LeftWindow />
            <Feed />
            <RightWindow />
        </div>
    </>
  )
}

export default Home;