import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navigation">
      <div className="navigation-container">
        <div className="navigation-logo">
          <Link to="/" className="logo-link">
            <img 
              src="https://res.cloudinary.com/dvybb2xnc/image/upload/f_png,w_200,h_200,c_scale,q_auto/v1752659104/PMI_Purple_o6ml7r.ai" 
              alt="PMI Logo" 
              className="logo-image"
              onLoad={(e) => {
                console.log('PMI Logo loaded successfully');
                const fallback = e.target.nextElementSibling;
                if (fallback) {
                  fallback.style.display = 'none';
                }
              }}
              onError={(e) => {
                console.log('PMI Logo failed to load, showing fallback');
                e.target.style.display = 'none';
                const fallback = e.target.nextElementSibling;
                if (fallback) {
                  fallback.style.display = 'flex';
                }
              }}
            />
            <div className="logo-fallback" style={{ display: 'flex' }}>
              <span className="logo-initials">PMI</span>
            </div>
                         <h1 className="logo-text">Medical websites</h1>
          </Link>
        </div>
        
        <ul className="navigation-menu">
          <li className="navigation-item">
            <Link 
              to="/" 
              className={`navigation-link ${isActive('/') ? 'navigation-link-active' : ''}`}
            >
              Home
            </Link>
          </li>
          
          <li className="navigation-item">
            <Link 
              to="/contact" 
              className={`navigation-link ${isActive('/contact') ? 'navigation-link-active' : ''}`}
            >
              Contact
            </Link>
          </li>
                         <li className="navigation-item">
                 <Link
                   to="/faq"
                   className={`navigation-link ${isActive('/faq') ? 'navigation-link-active' : ''}`}
                 >
                   Steps
                 </Link>
               </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
