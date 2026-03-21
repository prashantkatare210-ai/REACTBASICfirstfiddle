import React from 'react'
import Header from "./components/Header";
import Home from './pages/Home';
import Footer from "./components/Footer";
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Brand from './pages/Brand';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brand" element={<Brand />} />

      </Routes>


      <Footer />
    </>
  );
}

export default App

