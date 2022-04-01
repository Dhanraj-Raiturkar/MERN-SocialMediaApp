import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import ProfilePage from "./pages/profile/ProfilePage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/profile' element={<ProfilePage/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
