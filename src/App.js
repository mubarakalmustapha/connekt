import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import About from './components/About/About'
import './App.css';
import CustomNavbar from './components/navbar/CustomNavbar';

function App() {
  return (
    <>
    <CustomNavbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
   

    
  );
}

export default App;
