import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import Navigation component
import Navigation from './components/Navigation/Navigation';

// Import all page components
import Home from './components/Home/Home';
import Contact from './components/contact/Contact';
import FAQ from './components/FAQ/FAQ';
import Programmers from './components/Programmers/Programmers';
import Services from './components/Services/Services';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/programmers" element={<Programmers />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
