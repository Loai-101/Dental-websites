import React, { useState } from 'react';
import Lottie from 'lottie-react';
import fingerprintAnimation from '../../DashBoard.json/Fingerprint Verification.json';
import './LoginModalStyles.css';

const LoginModal = ({ isOpen, onClose, onLogin, productName = '' }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Check if first login has been used
  const isFirstLoginUsed = localStorage.getItem('pmi_first_login_used') === 'true';

  // Predefined accounts
  const accounts = {
    'loai': '38224411',
    'malik': '32003933',
    'jahan': '32000711',
    ...(isFirstLoginUsed ? {} : { 'pmi': '13676757' }) // Only add pmi account if first login not used
  };

  // Department configurations
  const getDepartmentConfig = (department) => {
    const configs = {
      'PMI IT': {
        color: '#8B5CF6',
        gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)',
        logo: 'https://res.cloudinary.com/dvybb2xnc/image/upload/f_png,w_150,h_150,c_scale,q_auto/v1752659104/PMI_Purple_o6ml7r.ai'
      },
      'PMI Medical': {
        color: '#3B82F6',
        gradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
        logo: 'https://res.cloudinary.com/dvybb2xnc/image/upload/f_png,w_150,h_150,c_scale,q_auto/v1752659104/PMI_Blue_w7w1zn.ai'
      },
      'PMI Advertising': {
        color: '#D97706',
        gradient: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
        logo: 'https://res.cloudinary.com/dvybb2xnc/image/upload/f_png,w_150,h_150,c_scale,q_auto/v1752659104/PMI_Brown_ooq0sv.ai'
      }
    };
    return configs[department] || configs['PMI IT'];
  };

  const departmentConfig = getDepartmentConfig(productName);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (accounts[username.toLowerCase()] === password) {
      setIsLoggedIn(true);
      
      // If this is the first login with 'pmi', mark it as used
      if (username.toLowerCase() === 'pmi' && !isFirstLoginUsed) {
        localStorage.setItem('pmi_first_login_used', 'true');
        console.log('🔐 First login with PMI account completed - account will be disabled for future logins');
      }
      
      // Send email notification
      sendLoginNotification(username, productName);
      
      // Call onLogin after a short delay to show the animation
      setTimeout(() => {
        onLogin(username);
        onClose();
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
        setError('');
      }, 2000); // Show animation for 2 seconds
    } else {
      setError('Invalid username or password');
    }
  };

  const sendLoginNotification = async (username, department) => {
    const currentDate = new Date();
    const timestamp = currentDate.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    });

    const dateOnly = currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const timeOnly = currentDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    // Detect device type
    const getDeviceType = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        return 'Mobile';
      } else if (width <= 768) {
        return 'Tablet';
      } else {
        return 'Desktop';
      }
    };

    const deviceType = getDeviceType();

    try {
      // Prepare form data for FormSubmit
      const formDataToSend = new FormData();
      
      formDataToSend.append('name', username);
      formDataToSend.append('department', department || 'Unknown');
      formDataToSend.append('date', dateOnly);
      formDataToSend.append('time', timeOnly);
      formDataToSend.append('device_type', deviceType);
      
      // FormSubmit Configuration
      formDataToSend.append('_subject', `🔐 User Login - ${department || 'PMI System'}`);
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_template', 'table');

      // Send to FormSubmit
      const response = await fetch('https://formsubmit.co/q9g8moh@gmail.com', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        console.log('✅ Login notification email sent successfully!');
        console.log(`Name: ${username}, Department: ${department}, Date: ${dateOnly}, Time: ${timeOnly}, Device: ${deviceType}`);
      } else {
        console.error('Failed to send login notification email');
      }
    } catch (error) {
      console.error('Error sending login notification:', error);
      // Don't block login if email fails
    }
  };

  const getClientIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      return 'Unknown';
    }
  };

  const handleClose = () => {
    onClose();
    setUsername('');
    setPassword('');
    setError('');
    setIsLoggedIn(false);
    setShowPassword(false);
  };

  if (!isOpen) return null;

  return (
    <div className="login-modal-overlay" onClick={handleClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <div 
          className="login-modal-header" 
          style={{ background: departmentConfig.gradient }}
        >
          {productName && (
            <div className="department-logo">
              <img 
                src={departmentConfig.logo}
                alt={`${productName} Logo`}
                className="department-logo-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
          <h2>Login Required</h2>
          <button className="close-button" onClick={handleClose}>×</button>
        </div>
        
        {productName && (
          <div className="product-info" style={{ background: `rgba(${departmentConfig.color}, 0.1)` }}>
            <p style={{ color: 'black' }}>Accessing: <strong style={{ color: 'black' }}>{productName}</strong> Detailing Aids</p>
          </div>
        )}
        
        {isLoggedIn ? (
          <div className="verification-section">
            <div className="fingerprint-animation">
              <Lottie 
                animationData={fingerprintAnimation}
                loop={true}
                autoplay={true}
              />
            </div>
            <p className="verification-text">Verifying Access...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  className="password-input"
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </button>
              </div>
            </div>
            
            {error && <div className="error-message">{error}</div>}
            
            <div className="form-actions">
              <button 
                type="submit" 
                className="login-button"
                style={{ background: departmentConfig.gradient }}
              >
                Login
              </button>
              <button type="button" className="cancel-button" onClick={handleClose}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
