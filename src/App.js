import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
import PMIIT from './components/PMIIT/PMIIT';
import PMIMedical from './components/PMIMedical/PMIMedical';
import PMIAdvertising from './components/PMIAdvertising/PMIAdvertising';
import WebTailorDemo from './components/WebTailorDemo/WebTailorDemo';
import DetailingAids from './components/DetailingAids/DetailingAids';
import MobileBottomNav from './components/MobileBottomNav/MobileBottomNav';

// Component to handle redirect to login before refresh
const RedirectHandler = ({ children, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      // Allow department pages to refresh without redirect
      const departmentPages = ['/pmi-it', '/pmi-medical', '/pmi-advertising'];
      if (!departmentPages.includes(location.pathname)) {
        // Redirect to login page before refresh for non-department pages
        onLogout();
      }
    };

    const handleKeyDown = (e) => {
      // Detect F5 or Ctrl+R refresh
      if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
        const departmentPages = ['/pmi-it', '/pmi-medical', '/pmi-advertising'];
        if (!departmentPages.includes(location.pathname)) {
          e.preventDefault();
          onLogout();
        }
      }
    };

    // Add event listeners
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate, location.pathname, onLogout]);

  return children;
};

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

  const handleLogout = () => {
    setIsAuthenticated(false);
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
      <RedirectHandler onLogout={handleLogout}>
        <div className="App">
          <ScrollToTop />
          <Navigation onLogout={handleLogout} />
          <main className="App-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/programmers" element={<Programmers />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pmi-it" element={<PMIIT />} />
              <Route path="/pmi-medical" element={<PMIMedical />} />
              <Route path="/pmi-advertising" element={<PMIAdvertising />} />
              <Route path="/webtailor-demo" element={<WebTailorDemo />} />
              <Route path="/detailing-aids/:department/:product" element={<DetailingAids />} />
            </Routes>
          </main>
          <MobileBottomNav />
        </div>
      </RedirectHandler>
    </Router>
  );
}

export default App;
