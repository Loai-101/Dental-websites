import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ onLogout }) => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  const toggleDropdown = () => {
    console.log('Menu button clicked, current state:', isDropdownOpen);
    setIsDropdownOpen(prev => {
      const newState = !prev;
      console.log('Setting dropdown to:', newState);
      
      // Prevent body scroll on mobile when menu is open
      if (newState) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
      
      return newState;
    });
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Close dropdown when clicking outside or on touch
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    const handleTouchOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleTouchOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleTouchOutside);
    };
  }, [isDropdownOpen]);

  // Cleanup body scroll on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const navigationItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/programmers', label: 'Team', icon: '👥' },
    { path: '/contact', label: 'Contact', icon: '📞' }
  ];

  return (
    <nav className="navigation">
      <div className="navigation-container">
        <div className="navigation-logo">
          <Link to="/" className="logo-link">
            <img 
              src="https://res.cloudinary.com/dvybb2xnc/image/upload/f_png,w_200,h_200,c_scale,q_auto/v1751977454/PMI_Circile_Gray_wiu9mh.ai" 
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
                         <h1 className="logo-text">PMI DA</h1>
          </Link>
        </div>
        
        <ul className="navigation-menu">
          {/* Dropdown Menu Button */}
          <li className={`navigation-item dropdown-container ${isDropdownOpen ? 'dropdown-open' : ''}`} ref={dropdownRef}>
            <button 
              onClick={toggleDropdown}
              className="navigation-link dropdown-button"
              type="button"
              style={{ backgroundColor: isDropdownOpen ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)' }}
            >
              <span className="dropdown-icon">☰</span>
              <span className="dropdown-text">Menu</span>
            </button>
            
            {/* Dropdown Menu */}
            <div className={`dropdown-menu ${isDropdownOpen ? 'dropdown-menu-open' : ''}`}>
              <div className="dropdown-header">
                <span>Navigation Menu</span>
              </div>
              <div className="dropdown-items">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeDropdown}
                    className={`dropdown-item ${isActive(item.path) ? 'dropdown-item-active' : ''}`}
                  >
                    <span className="dropdown-item-icon">{item.icon}</span>
                    <span className="dropdown-item-label">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </li>
          
          {/* Logout Button */}
          <li className="navigation-item">
            <button 
              onClick={handleLogout}
              className="navigation-link logout-button"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
