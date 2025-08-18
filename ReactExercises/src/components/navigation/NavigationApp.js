import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function NavigationApp() {
  return (
    <Router>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <nav>
          <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
          <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
          <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default NavigationApp;
