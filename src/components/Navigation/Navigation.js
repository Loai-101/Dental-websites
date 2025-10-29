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

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Menu button clicked, isDropdownOpen:', isDropdownOpen);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const navigationItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/services', label: 'Services', icon: '⚙️' },
    { path: '/programmers', label: 'Team', icon: '👥' },
    { path: '/contact', label: 'Contact', icon: '📞' },
    { path: '/faq', label: 'FAQ', icon: '❓' }
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
                         <h1 className="logo-text">Detailing Aids</h1>
          </Link>
        </div>
        
        <ul className="navigation-menu">
          {/* Dropdown Menu Button */}
          <li className="navigation-item dropdown-container" ref={dropdownRef}>
            <button 
              onClick={toggleDropdown}
              className="navigation-link dropdown-button"
              type="button"
            >
              <span className="dropdown-icon">☰</span>
              <span className="dropdown-text">Menu</span>
            </button>
            
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-header">
                  <span>Navigation Menu</span>
                  <button 
                    onClick={closeDropdown}
                    className="dropdown-close"
                    type="button"
                  >
                    ✕
                  </button>
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
            )}
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
