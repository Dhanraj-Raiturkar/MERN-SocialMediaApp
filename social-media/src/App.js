import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route exact path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
