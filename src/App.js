
import './App.css';
// import Navbar from './components/Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from "./AllPage/Register";
import Login from './AllPage/Login';
import Home from "./AllPage/Home";
import Explore from './AllPage/Explore';
import Contact from './AllPage/contact';
import Update from './AllPage/Update';
import Courses from './AllPage/Couses';
import Order from './AllPage/Order';

// import { Login, Route, Router,Routes,BrowserRouter } from '@mui/icons-material';
// <Navbar/>

function App() {
  return ( 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Register" element={<Register/>}></Route>
          <Route path='/Explore' element={<Explore/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/Update' element={<Update/>}></Route>
          <Route path='/Courses' element={<Courses/>}></Route>
          <Route path='/Order' element={<Order/>}></Route>
        </Routes>
      </BrowserRouter>  
  );
}

export default App;
