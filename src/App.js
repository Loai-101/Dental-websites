import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import Navigation component
import Navigation from './components/Navigation/Navigation';

// Import ScrollToTop component
import ScrollToTop from './components/ScrollToTop';

// Import Loading component
import Loading from './components/Loading/Loading';

// Import Login component
import Login from './components/Login/Login';

// Import all page components
import Home from './components/Home/Home';
import Contact from './components/contact/Contact';
import FAQ from './components/FAQ/FAQ';
import Programmers from './components/Programmers/Programmers';
import Services from './components/Services/Services';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    // Simulate loading time
    setTimeout(() => {
      setIsAuthenticated(true);
      setIsLoading(false);
    }, 3000);
  };

  // Show loading page after login
  if (isLoading) {
    return <Loading />;
  }

  // Show login page if not authenticated
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
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
