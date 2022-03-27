import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
