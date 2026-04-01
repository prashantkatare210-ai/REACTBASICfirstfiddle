
import React from 'react'
import Header from './pages/Header';
import Home from './Home';
import Footer from './pages/Footer';
import { Routes, Route } from "react-router-dom"
import About from './About';
import Brand from './Brand';
import Ourteam from './Ourteam';
import Press from './press';
import Contact from './Contact';
import Careers from './careers';

function App() {
  return (
    <>
      <Header />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Brand' element={<Brand />} />
        <Route path='/Ourteam' element={<Ourteam />} />
        <Route path='/Press' element={<Press />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Careers' element={<Careers />} />
      </Routes>



      <Footer />
    </>
  );
}

export default App