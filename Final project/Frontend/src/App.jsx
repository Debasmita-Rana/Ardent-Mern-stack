import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import  Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Addcourse from './components/Addcourse';
import Coursedetails from './components/Coursedetails';
const App = () => {
  return <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About message="ok"/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/add" element={<Addcourse/>}></Route>
        <Route path="/courses" element={<Coursedetails/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>

};

export default App;