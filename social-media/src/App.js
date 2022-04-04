import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import ProfilePage from "./pages/profile/ProfilePage";
import { useSelector } from "react-redux";

function App() {

  const loginStatus = useSelector(state => state.loginUser.loginStatus);

  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element=
            {
              loginStatus ?
                <Home/>
              :
                <Login/>
            } />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/profile' element={<ProfilePage/>} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
