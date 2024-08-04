import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import BrandList from './components/BrandList';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nike" element={<BrandList brand="Nike" />} />
            <Route path="/adidas" element={<BrandList brand="adidas" />} />
            <Route path="/jordan" element={<BrandList brand="Jordan" />} />
            <Route path="/crocs" element={<BrandList brand="Crocs" />} />
            <Route path="/puma" element={<BrandList brand="Puma" />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
