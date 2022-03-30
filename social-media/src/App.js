import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route exact path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
