import Navbar from '../../components/navbar/Navbar';
import classes from './Home.module.css';
import LeftWindow from '../../components/leftFeedWindow/LeftWindow';
import Feed from '../../components/feed/Feed';
import RightWindow from '../../components/rightFeedWindow/RightWindow';
import HamburgerMenu from '../../components/mobile-view/hamburger/HamburgerMenu';
import LogoutModal from '../modals/LogoutModal';
import { useSelector } from 'react-redux';

const Home = () => {

  const toggleLogout = useSelector(state => state.toggleUi.toggleLogout);

  console.log(toggleLogout);
  return (
    <>
        <Navbar/>
        <HamburgerMenu />
        {toggleLogout && <LogoutModal/>}
        <div className={classes.homeWrapper}>
            <LeftWindow />
            <Feed />
            <RightWindow />
        </div>
    </>
  )
}

export default Home;