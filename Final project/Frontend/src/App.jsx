import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import  Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Addcourse from './components/Addcourse';
import Coursedetails from './components/Coursedetails';
import Editcourse from './components/Editcourse';
import Viewcourse from './components/Viewcourse';
import PrivateRoute from './utils/PrivateRoute';
import Register from './components/Register';
import Login from './components/Login';
const App = () => {
  return <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/add" element={<Addcourse/>}></Route>
        <Route path="/courses/:id" element={<Coursedetails/>}></Route>
        <Route path="/edit-courses/:id" element={<Editcourse/>}></Route>
         <Route path="/courses" element={<Viewcourse/>}></Route>
         <Route element = {<PrivateRoute />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>

};

export default App;