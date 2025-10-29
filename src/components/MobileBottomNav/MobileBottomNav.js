import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MobileBottomNav.css';

const MobileBottomNav = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', icon: '🏠', label: 'Home' },
    { path: '/services', icon: '⚙️', label: 'Services' },
    { path: '/programmers', icon: '👥', label: 'Team' },
    { path: '/contact', icon: '📞', label: 'Contact' },
    { path: '/faq', icon: '❓', label: 'FAQ' }
  ];

  return (
    <nav className="mobile-bottom-nav">
      <div className="mobile-nav-container">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`mobile-nav-item ${isActive(item.path) ? 'mobile-nav-item-active' : ''}`}
          >
            <div className="mobile-nav-icon">
              {item.icon}
            </div>
            <span className="mobile-nav-label">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
